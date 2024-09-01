const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id:{
        type: Number,
        require: false
    },
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("bookList",bookSchema);