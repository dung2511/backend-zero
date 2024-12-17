const express = require('express')
const path = require('path');
require('dotenv').config();
// import express from 'express'
const app = express(); // app của express 
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME;
// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/check-route', (req, res) => {
    res.send('Check route!')
})
app.get('/example', (req, res) => {
    // res.send('<h1>Test dynamic content</h1>')
    res.render("example.ejs")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})