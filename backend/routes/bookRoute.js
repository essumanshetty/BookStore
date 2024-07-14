import express from 'express';
import {Book} from '../models/bookModels.js';
const router = express.Router();

//API : Create a New Book (POST)
router.post('/create_new', async(req,res)=>{
    
    try {
        if( 
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) //Validate input
        return res.status(400).send({message : 'Please Input all mandatory fields.....'});
        const newBook = {
            title : req.body.title,
            author: req.body.author,
            publishYear : req.body.publishYear
        } = req.body;

       const createdBook =  await Book.create(newBook); //Create a New Book
       return res.status(201).send(createdBook); //Send the Created book back as response

    } catch (error) {
        console.log("error, error");
        res.status(500).send({message: error.message}) //Send error message
    }
})

//API: Read all the books (GET)
router.get('/all_books', async(req,res)=>{
    try {
        const allBooks = await Book.find({});
        res.status(200).send(allBooks);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
});

// API : Get a Book by Id (GET)
router.get('/book/:id', async(req,res)=>{
    try {
        const {id} = req.params;  //fetch book id passed in query URL
        const book = await Book.findById(id); // Find a book by Id
        //If no books return custom message
        if(!book || book.length === 0) return res.status(200).send({message: 'No Book Found....'}) 
        res.status(200).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});   
    }
})

//API : Update a Book by ID
router.put('/update_book/:id', async (req,res)=>{
    try {
        //Check if the parameters are not passed
        if(!req.body.title || !req.body.author || !req.body.publishYear) return res.status(400).send({message: 'Bad request, Please send all the fields'})
        
        const {id} = req.params ;
        const book = await Book.findByIdAndUpdate(id, req.body);
        if(!book) return res.status(404).send({message: 'Book Not Found..'})
        res.status(200).send({ message: 'Update Successfully....'})
    } catch (error) {
        console.log(error)
        res.status(500).send({message : error.message});    
    }
})

//API: Delete a Book By ID
router.delete('/delete_book/:id', async(req,res)=>{
    try {
        const {id} =req.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book) return res.status(200).send({message: 'No Books Found....'})
        return res.status(200).send({message: 'Book Deleted successfully...'})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
})


export default router;