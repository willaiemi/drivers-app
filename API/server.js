// requiring express for routing
const express = require('express')
// requiring mongoose
const mongoose = require('mongoose')
const requireDir = require('require-dir')
// require cors
const cors = require('cors')

// Creating app with express
const app = express()
app.use(express.json())

// allow outside use of the api
app.use(cors())

// Starting database
mongoose.connect('mongodb://localhost:27017/driverapi', {
	useNewUrlParser: true
})

// require model directory
requireDir('./src/model')

// First route
app.use('/api', require('./src/routes'))

// App now listens to localhost:3002 requisitions
app.listen(3002)