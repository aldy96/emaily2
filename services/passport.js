//untuk passport
const passport = require('passport'); //library for handling authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //library from passport for specifies the authentication type provider example = "googleOauth"
const keys = require("../config/keys")

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => { 
        console.log('accesssToken:', accessToken);
        console.log('refreshToken:',refreshToken);
        console.log('profile:',profile);
    }
)); //telling the passport with use "hey passport you can handle auth, but this is the more specific ways"
