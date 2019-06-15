const express = require('express')
const routes = express.Router()

const DriverControl = require('./control/DriverControl')

// Routes
routes.get('/drivers', DriverControl.index)
routes.post('/drivers', DriverControl.store)
routes.get('/drivers/:id', DriverControl.show)

module.exports = routes