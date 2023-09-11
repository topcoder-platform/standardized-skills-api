const _ = require('lodash')
const constants = require('../../app-constants')
const errors = require('../common/errors')

/**
 * Check if exists.
 *
 * @param {Array} source the array in which to search for the term
 * @param {Array | String} term the term to search
 */
function checkIfExists (source, term) {
  let terms

  if (!_.isArray(source)) {
    throw new Error('Source argument should be an array')
  }

  source = source.map(s => s.toLowerCase())

  if (_.isString(term)) {
    terms = term.toLowerCase().split(' ')
  } else if (_.isArray(term)) {
    terms = term.map(t => t.toLowerCase())
  } else {
    throw new Error('Term argument should be either a string or an array')
  }

  for (let i = 0; i < terms.length; i++) {
    if (source.includes(terms[i])) {
      return true
    }
  }

  return false
}

/**
 * Wrap async function to standard express function
 * @param {Function} fn the async function
 * @returns {Function} the wrapped function
 */
function wrapExpress (fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next)
  }
}

/**
 * Wrap all functions from object
 * @param obj the object (controller exports)
 * @returns {Object|Array} the wrapped object
 */
function autoWrapExpress (obj) {
  if (_.isArray(obj)) {
    return obj.map(autoWrapExpress)
  }
  if (_.isFunction(obj)) {
    if (obj.constructor.name === 'AsyncFunction') {
      return wrapExpress(obj)
    }
    return obj
  }
  _.each(obj, (value, key) => {
    obj[key] = autoWrapExpress(value)
  })
  return obj
}

/**
 * Gets the list of parameters from the query as an array
 *
 * @param query
 * @param parameterName
 * @returns {*[]}
 */
const getParamsFromQueryAsArray = (query, parameterName) => {
  const paramsArray = []
  if (!_.isEmpty(query[parameterName])) {
    if (!_.isArray(query[parameterName])) {
      paramsArray.push(query[parameterName])
    } else {
      paramsArray.push(...query[parameterName])
    }
  }
  return paramsArray
}

/**
 * Sets the pagination headers
 *
 * @param {*} req
 * @param {*} res
 * @param {*} result
 */
const setResHeaders = (req, res, result) => {
  res.set('X-Page', parseInt(result.page, 10))
  res.set('X-Per-Page', result.perPage)
  res.set('X-Total', result.total)
  res.set('X-Total-Pages', result.totalPages)
}

const ensureUserCanManageMemberSkills = (currentUser, memberId) => {
  if (!currentUser.isMachine && !hasAdminRole(currentUser) && Number(currentUser.userId) !== memberId) {
    throw new errors.ForbiddenError('You are not allowed to perform this action')
  }
}

/**
 * Checks whether the given user has admin role or no
 * @param user
 */
const hasAdminRole = currentUser => {
  if (currentUser && currentUser.roles) {
    for (let i = 0; i < currentUser.roles.length; i++) {
      if (currentUser.roles[i].toLowerCase() === constants.UserRoles.Admin.toLowerCase()) {
        return true
      }
    }
  }
  return false
}

module.exports = {
  checkIfExists,
  autoWrapExpress,
  getParamsFromQueryAsArray,
  setResHeaders,
  ensureUserCanManageMemberSkills
}
