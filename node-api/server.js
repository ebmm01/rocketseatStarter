const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world, esse é um teste =)');
})

app.listen(3001);