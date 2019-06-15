const express = require('express')
const routes = express.Router()

const DriverControl = require('./control/DriverControl')

// Routes
routes.get('/drivers', DriverControl.index)
routes.post('/drivers', DriverControl.store)

module.exports = routes