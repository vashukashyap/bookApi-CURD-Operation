const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const booksRouter = require('./routers/book');




const PORT=4000
const URL = "mongodb://127.0.0.1:27017/bookstore"


const app = express()


mongoose.connect(URL,{useNewUrlParser:true,useUniFiedTopology:true})
.then(()=>{
    console.log("connected with mongodb")
})
.catch(error=>console.log(error))

const conn = mongoose.connection

conn.on('open', ()=>{
    console.log("DB connected")
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/books/',booksRouter)





app.listen(PORT, ()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})