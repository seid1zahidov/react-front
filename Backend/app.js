const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/Bookroutes')
const routers = require('./routes/Bookroutes')

const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use('/books',router)

mongoose.connect('mongodb+srv://FinalDB:ZWjE4XJrKHc4Lnsb@cluster0.ltyoqbz.mongodb.net/FinalDB?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(3002)
})
.catch((err) => console.log(err))

