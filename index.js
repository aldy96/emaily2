const express = require('express'); //pemanggilan modul di JS, tapi bukan ES15, contoh di ES15 = "import e from "e" " framework untuk mempermudah Protokol HTTP
const mongoos = require('mongoose'); //calling mongoose to connect with mongodb
const keys = require('./config/keys');
require('./models/User') // the code must be in order, call models user then passport, this argument for load Schema into mongoose
require('./services/passport'); //hanya di butuhkan berjalan saja no need to assign, this argument for fetch Schema from mongoose
// const authRoutes = require('./routes/authRoutes'); bisa gini


mongoos.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}) //settingan default dari petunjuk di Udemy, untuk koneksi ke mongoDB

const app = express();

// authRoutes(app); <== bisa gini
require('./routes/authRoutes')(app);


// app.get('/', (req, res) => { 
//     res.send({hello: 'bearly'});
// });
//ada format tersendiri, get = command, / = router nya, req = reqques, res = respone

//app as an express, get is type of methode, "auth/google" as router, passport as callback


const PORT = process.env.PORT || 5000; //The process.env global variable is injected by the Node at runtime for your application to use and it represents the state of the system environment your application is in when it starts
app.listen(PORT); // pada port berapa
