const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    genre:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    pages:{
        type:Number
    }

})

module.exports = mongoose.model('Book', bookSchema)