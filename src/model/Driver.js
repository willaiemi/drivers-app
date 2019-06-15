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
		type: Number,
		required: true
	},
	locationLongitude: {
		type: Number,
		required: true
	}
})

// Plugin for pagination
DriverSchema.plugin(mongoosePaginate)

// Registering the model
mongoose.model('Driver', DriverSchema)