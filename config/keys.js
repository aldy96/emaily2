//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') { //.env.NODE_ENV is heroku global variable for telling "this is production"
    // we are in production - return the prod set of keys
    module.export = require('./prod');
} else {
    // we are in development - return the dev keys
    module.export = require('./dev');
}