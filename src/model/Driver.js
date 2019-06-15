// requiring mongoose
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

// creating the driver Schema
const DriverSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	carPlate: {
		type: String,
		required: true
	},
	locationLatitude: {
		type: number,
		required: true
	},
	locationLongitude: {
		type: number,
		required: true
	}
})

// Plugin for pagination
DriverSchema.plugin(mongoosePaginate)

// Registering the model
mongoose.model('Driver', DriverSchema)