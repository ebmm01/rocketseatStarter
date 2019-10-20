const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})

app.get('/', (req, res) => {
    res.send('Hello world, esse é um teste =)');
})

app.listen(3001);