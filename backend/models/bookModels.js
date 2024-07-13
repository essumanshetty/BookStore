import mongoose from "mongoose";

//Create a Schema(Structure) for Books
const BookSchema = mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear : {
        type: Number,
        required : true
    }
})

//Create a Model with the name Books in DB
export const Book =mongoose.model('Books', BookSchema);