//untuk passport
const passport = require('passport'); //library for handling authentication
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //library from passport for specifies the authentication type provider example = "googleOauth"
const keys = require("../config/keys");

const User = mongoose.model('users'); //fetching the Schema, probably this is a class

passport.use(
    new GoogleStrategy( //function kemudian kita berikan clientID object sebagai parameter
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 

    (accessToken, refreshToken, profile, done) => { 
        // untuk menambahkan new User({ googleId: profile.id }).save(); //assign data from google into Schema variable, probably this is an instance from class
        // "schema" findOne (for looking a record with same id with parameter (parameter = berisi variable key and value yang di assign) then promise arrow function
        User.findOne({ googleId: profile.id}).then(existingUser => {
            if(existingUser){
                //we already have a record with the given id
                done(null, existingUser);
            } else {
                //we dont have a record with the given id
                new User({ googleId: profile.id })
                .save()
                .then(user => {done(null, user)});
            }
        });
        
        console.log('accesssToken:', accessToken);
        console.log('refreshToken:',refreshToken);
        console.log('profile:',profile);
    }
)); //telling the passport with use "hey passport you can handle auth, but this is the more specific ways"
