// //keys.js - figure out what set of credentials to return
// if (process.env.NODE_ENV === 'production') { //.env.NODE_ENV is heroku global variable for telling "this is production"
//     // we are in production - return the prod set of keys
//     module.export = require('./dev');
// } else {
//     // we are in development - return the dev keys
//     module.export = require('./dev');
// }

module.exports = {
    googleClientID: '7982080818-dagticjnbpgb768rj9atgqacmjdomkfv.apps.googleusercontent.com',
    googleClientSecret: 'M20yz-maLrTvLg38xNZOk5gR',
    mongoURI: 'mongodb+srv://myuser:oGzRwotI2xu0LEbA@cluster0.rbjhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    cookieKey: 'abc123',

};
