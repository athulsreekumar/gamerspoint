const express = require('express')
const app = express();

app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/dashboard',(req,res) => {
    res.render('store')
})

app.get('/library',(req,res) => {
    res.render('library')
})

app.get('/friends',(req,res) => {
    res.render('friends')
})

app.listen(5000, () => {
    console.log("Server Started on port 5000")
})