// requiring express for routing
const express = require('express')

// Creating app with express
const app = express()

// First route
app.get('/', (req, res) => {
	res.send("It works!")
})


// App now listens to localhost:3002 requisitions
app.listen(3002)