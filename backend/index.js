import express from 'express';
import mongoose from 'mongoose';
import { Book } from './models/bookModels.js';
import {PORT, connectionString} from './config.js'

const app = express();

app.use(express.json()) // middleware used to parse the request body
//First api

app.get('/', (req, res)=>{
    res.send("Congratulations on your first api");
})


//API : Create a New Book (POST)
app.post('/books/create_new', async(req,res)=>{
    
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
app.get('/books/all_books', async(req,res)=>{
    try {
        const allBooks = await Book.find({});
        res.status(200).send(allBooks);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
})


//Connect to MongoDB via mongoose ORM
const connectToMongoDBDatabase =async()=>{
    try {
       await mongoose.connect(connectionString)
       console.log("Connected to DB Successfully......")
    } catch (error) {
        console.log("Connection failed......")
    }

}





//Tell our app to run on particular port, and call a callback method to log to console
app.listen(PORT, ()=>{
    console.log(`Server is listening at port : ${PORT}`);
    connectToMongoDBDatabase();
});


