const express = require('express');
const Book = require('../models/Book');


const router = express.Router();


//get all books
router.get('/', async (req,res)=>{

    try{
        let book = await Book.find()
        res.json({book})
    }
    catch(error){
        res.json(error)
    }

    
})

//create a book
router.post("/", async (req,res)=>{
    let book = new Book({
        title: req.body.title,
        isbn: req.body.isbn,
        desc : req.body.desc,
        genre: req.body.genre,
        author: req.body.author,
        pages: req.body.pages
    })
    
    try{
        let newBook = await book.save();
        res.json(newBook)
    }catch(error){
        console.log(error)
        res.json(error);
    }
})

//get a specific book
router.get("/:id", async (req,res)=>{
    try{
        let book = await Book.findById(req.params.id);
        res.status(200).json(book);
    }
    catch(error){
        res.status(400).json(error);
    }
})

//delet a specific book
router.delete("/:id", async (req,res)=>{
    console.log(req.params.id)
    try{
        let book = await Book.findById(req.params.id);
        if(!book){
            return res.status(400).json({message: "book not found"});
        }
        book.deleteOne();
        res.status(200).json({message: "book is deleted succesfully!"});
    }
    catch(error){
        res.status(400).json(error);
    }
})

//update book
router.put("/:id", async(req,res)=>{
    console.log(req.params.id)
    try{
        let book = await Book.findById(req.params.id)
        console.log(book)
        if(!book){
         return res.json({message:"Book not found"})   
        }
        
        book = await Book.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            useFindAndModify:false,
            runValidators:true
        })
        console.log(book)

        res.json({
            message:"Book is updated",
            book
                    
        })
    }catch(error){
        res.status(400).json(error);
    }
})



module.exports = router;