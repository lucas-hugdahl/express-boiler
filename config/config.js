let PRODUCTION_ENVIROMENT_SETTINGS = require('./env-production');
let STAGING_ENVIROMENT_SETTINGS = require('./env-staging');
let DEVELOPMENT_ENVIROMENT_SETTINGS = require('./env-development');


//Decide which settings to load
let CONFIG = 
process.env.NODE_ENV == "development" ? DEVELOPMENT_ENVIROMENT_SETTINGS :
process.env.NODE_ENV == "staging" ? STAGING_ENVIROMENT_SETTINGS :
PRODUCTION_ENVIROMENT_SETTINGS;

module.exports = CONFIG;