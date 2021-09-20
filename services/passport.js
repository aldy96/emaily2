//untuk passport
const passport = require('passport'); //library for handling authentication
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //library from passport for specifies the authentication type provider example = "googleOauth"
const keys = require('../config/keys')

const User = mongoose.model('users'); //fetching the Schema, probably this is a class

passport.serializeUser((user,done) => {
    done(null, user.id);
}); //this is for making user unique serial for sending to browser as cookies, 
    //done = setiap selesai aktivitas passport "done" adalah callback nya
    //karena ada 2 ID di mongodb, maka yang digunakan ID umum, bukan spesifik google

passport.deserializeUser((id, done)=>{
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy( //function kemudian kita berikan clientID object sebagai parameter
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback', //callback after we login
        // proxy: true,
        //in production, when we request to heroku, it will get into heroku proxy, and proxy is not trusted, so we add this code to tell the google strategy "hey it's fine, it trusted"
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
