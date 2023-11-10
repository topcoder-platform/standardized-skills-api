const [dialect, username, password, host, ...rest] = `${process.env.TC_SKILLS_DATABASE_URL}`.split(/:\/\/|:|@|\//g);
const [database, port] = rest.reverse();

const dbConfigs = {
    database,
    username,
    password,
    host,
    port,
    dialect,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 5000,
        evict: 1000,
    },
    define: {
        freezeTableName: true,
    },
};

module.exports = {
    development: { ...dbConfigs },
    production: { ...dbConfigs },
};
