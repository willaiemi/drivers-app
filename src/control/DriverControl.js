// requiring mongoose
const mongoose = require('mongoose')

const Driver = mongoose.model('Driver')

module.exports = {
	async index(req, res) {
		const drivers = await Driver.find()

		return res.json(drivers)
	},

	async store(req, res) {
		const driver = await Driver.create(req.body)

		return res.json(driver)
	},
	async show(req, res) {
		const driver = await Driver.findById(req.params.id)

		return res.json(driver)
	}
}