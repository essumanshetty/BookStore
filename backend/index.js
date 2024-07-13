import express from 'express'
import {PORT} from './config.js';
const app = express();


//First api

app.get('/', (req, res)=>{
    res.send("Congratulations on your first api");
})



//Tell our app to run on particular port, and call a callback method to log to console
app.listen(PORT, ()=>{
    console.log(`Server is listening at port : ${PORT}`)
})