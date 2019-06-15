const express = require('express')
const routes = express.Router()

const DriverControl = require('./control/DriverControl')

// Routes
routes.get('/drivers', DriverControl.index)

module.exports = routes