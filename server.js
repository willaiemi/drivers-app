// requiring express for routing
const express = require('express')
// requiring mongoose
const mongoose = require('mongoose')

// Creating app with express
const app = express()

// Starting database
mongoose.connect('mongodb://localhost:27017/driverapi', {
	useNewUrlParser: true
})

// First route
app.get('/', (req, res) => {
	res.send("It works!")
})


// App now listens to localhost:3002 requisitions
app.listen(3002)