//Import data model (Book)
const Book = require('../model/Book');
//Returns books as JSON
const getAllBooks = async (req,res)=>{
    const books = await Book.find();
    if(!books){
        return res.sendStatus(204).json({"message":"No books found"});
    }
    res.json(books);
};

//Adds a new book
const addNewBook = async (req,res)=>{
    if(!req?.body?.title || !req?.body?.author){
        return res.sendStatus(400).json({"message":"Title and Author are required!"});
    }
    //Set new book id (increased by 1, compare to the last book)
    const count = await Book.countDocuments({});
    const newBookId = count+1;
    try {
        const result  = await Book.create({
            id:newBookId,
            title:req.body.title,
            author:req.body.author
        });
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
    
}

//deletes a book
const deleteBook = async (req,res)=>{
    //Check if passed the id
    if(!req?.body?.id) return res.sendStatus(400).json({"message":"Book Id is required"});
    const book = await Book.findOne({id:req.body.id});
    //Check if some book mathed req.body.id
    if(!book) return res.sendStatus(204).json({"message":`No book matched ID:${req.body.id}`});
    //delete the book
    try {
        const result = await book.deleteOne();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllBooks,
    addNewBook,
    deleteBook
}