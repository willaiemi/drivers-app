// requiring mongoose
const mongoose = require('mongoose')
// preventing deprecated use
mongoose.set('useFindAndModify', false)

// get the driver model
const Driver = mongoose.model('Driver')

module.exports = {
	async index(req, res) {
		// get all drivers from the database
		const drivers = await Driver.find()

		//return all drivers in json format
		return res.json(drivers)
	},

	async store(req, res) {
		// create new driver in the database
		const driver = await Driver.create(req.body)

		// return in json format the newly created driver
		return res.json(driver)
	},
	async show(req, res) {
		// find driver by id
		const driver = await Driver.findById(req.params.id)

		// return the driver found
		return res.json(driver)
	},
	async update(req, res) {
		// find the driver by id and update it, returning the new driver
		const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		})

		// return the newly updated driver
		return res.json(driver)
	},
	async delete(req, res) {
		// find a driver by id and remove it from the database
		await Driver.findByIdAndRemove(req.params.id)

		// return status 200
		return res.send()
	}
}