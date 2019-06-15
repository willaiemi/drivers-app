// requiring dependencies
const express = require('express')
const routes = express.Router()

// get the driver controller
const DriverControl = require('./control/DriverControl')

// Routes
routes.get('/drivers', DriverControl.index)
routes.post('/drivers', DriverControl.store)
routes.get('/drivers/:id', DriverControl.show)
routes.put('/drivers/:id', DriverControl.update)
routes.delete('/drivers/:id', DriverControl.delete)

// export routes
module.exports = routes