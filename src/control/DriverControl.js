// requiring mongoose
const mongoose = require('mongoose')

const Driver = mongoose.model('Driver')

module.exports = {
	async index(req, res) {
		const drivers = await Driver.find()

		return res.json(drivers)
	}
}