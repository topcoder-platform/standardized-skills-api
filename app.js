require('./app-bootstrap')

const express = require('express')
const _ = require('lodash')
const HttpStatus = require('http-status-codes')
const bodyParser = require('body-parser')
const config = require('config')
const cors = require('cors')
const logger = require('tc-framework').logger(config)
const interceptor = require('express-interceptor')
// const { initDatabase } = require('./src/models/postgres/index')

// setup the express application
const app = express()

// enable cors
app.use(cors({
  // Allow browsers access pagination data in headers
  exposedHeaders: ['X-Page', 'X-Per-Page', 'X-Total', 'X-Total-Pages', 'X-Prev-Page', 'X-Next-Page']
}))

// register middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', config.PORT)

// intercept the response body from jwtAuthenticator
app.use(interceptor((req, res) => {
  return {
    isInterceptable: () => {
      return res.statusCode === 403
    },

    intercept: (body, send) => {
      let obj
      try {
        obj = JSON.parse(body)
      } catch (e) {
        logger.error('Invalid response body.')
      }
      if (obj && obj.result && obj.result.content && obj.result.content.message) {
        const ret = { message: obj.result.content.message }
        res.statusCode = 401
        send(JSON.stringify(ret))
      } else {
        send(body)
      }
    }
  }
}))

// register routes
require('./app-routes')(app)

// The error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.logFullError(err, req.signature || `${req.method} ${req.url}`)
  const errorResponse = {}
  const status = err.isJoi ? HttpStatus.BAD_REQUEST : (err.httpStatus || _.get(err, 'response.status') || HttpStatus.INTERNAL_SERVER_ERROR)

  if (_.isArray(err.details)) {
    if (err.isJoi) {
      _.map(err.details, (e) => {
        if (e.message) {
          if (_.isUndefined(errorResponse.message)) {
            errorResponse.message = e.message
          } else {
            errorResponse.message += `, ${e.message}`
          }
        }
      })
    }
  }
  if (_.get(err, 'response.status')) {
    // extra error message from axios http response(v4 and v5 tc api)
    errorResponse.message = _.get(err, 'response.data.result.content.message') || _.get(err, 'response.data.message')
  }

  if (_.isUndefined(errorResponse.message)) {
    if (err.message && status !== HttpStatus.INTERNAL_SERVER_ERROR) {
      errorResponse.message = err.message
    } else {
      errorResponse.message = 'Internal server error'
    }
  }
  res.status(status).json(errorResponse)
})

// start app server on successful postgres connection
// initDatabase().then(() => {
//   app.listen(app.get('port'), () => {
//     logger.info(`Express Server listening on port ${app.get('port')}`)
//   })
// }).catch(err => logger.error(err))

module.exports = app
