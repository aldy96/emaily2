const mongoose = require('mongoose');
const { Schema } = mongoose;  // we can use => const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
}); //membuat variabel apa saja untuk dibuat sebagai records di mongodb, dengan menggunakan mongoose maka fitur perbedaan variable antara records tidak dapat dilakukan

mongoose.model('users', userSchema); //membuat model dan mencocokan dengan yang ada di mongodb, load Schema into mongoose