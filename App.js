const express = require('express')
const app = express()

const people = require('./2. Express/Routes/People')
const auth = require('./2. Express/Routes/Auth')

//static assets
app.use(express.static('./2. Express/Methods-Public'))

//We need middleware to parse the form that has benn posted
app.use(express.urlencoded({extended: false}))
//We have to handle JSON data if we are transfering jso type from client
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, ()=>{
    console.log("Server is listening to port 5000....");
})