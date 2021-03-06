const passport = require('passport')

module.exports = (app) =>{

    //sama dengan express().get(...)
    app.get('/auth/google', passport.authenticate('google',
        {
            scope: ['profile','email']
        }
    )) // ini adalah request pertama dan nanti akan mendapatkan code unik

    app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {res.redirect('/surveys')}
    ); //pada sintaks ini, passport akan kembali melakukan request ke google tetapi dengan membawa code unik yg berasal dari hasil request yg pertama
    //route ini yang akan di tautkan bersama code dari google auth
    //res.redirect akan melakukan routing ke link yg di tuju setelah proses di passport(middleware)

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
        // res.send(req.user);
    }) //untuk logout

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
     
    }) //untuk mendapatkan user

} 