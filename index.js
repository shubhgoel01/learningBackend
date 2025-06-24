require('dotenv').config()

const express = require('express')
//import express form "express" => Same as line 1, just different syntax of JS

const app = express()
//app is very powerful, get is like object of express, using app we can access all functionalities of express

const port = 3000   // listen at port number 3000

app.get('/', (req, res) => {    //this asks app to listen (here a get request) form '/' (home) route, if any request comes here send a 'hello world' (here we have just passed a arrow function)
  res.send('Hello World!')
})

//Note, app.get() takes two paarmeters, 
    // 1. route
    // 2. callback function => in callback we have two parameters, (req, res) which are main functionalities of Express

app.get('/twitter', (req, res) => {    // Note this '/' is manadatory
  res.send('Yay!, i created a server')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})