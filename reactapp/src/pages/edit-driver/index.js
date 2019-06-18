// imports
import React, { Component } from 'react'
import './styles.css'
import api from '../../services/api'

export default class EditDriver extends Component {
	state = {
		driver: {}
	}

	async componentDidMount() {
		// when component mount, get the id passed in the URL
		const { id } = this.props.match.params;

		// use the ID to gather driver info
		const response = await api.get(`/drivers/${id}`)

		// update driver info
		this.setState({ driver: response.data })
	}

	handleChange = async (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		// if there's a change in some input, save the change in the driver info
		await this.setState({ driver: { ...this.state.driver, [name]: value } })
	}

	updateDriver = async (event) => {
		// prevent bad things from happening
		event.preventDefault()

		const driver = this.state.driver;
		// update the driver info in the database
		await api.put(`/drivers/${driver._id}`, {
			name: driver.name,
			carPlate: driver.carPlate
		})

		// redirect to the driver list
		this.props.history.push('/drivers')
	}

	goBack = (event) => {
		// prevent bad things from happening
		event.preventDefault()

		// redirect to the driver list
		this.props.history.push('/drivers')
	}

	render() {
		const { driver } = this.state

		return (
			<div className="edit-driver">
				<form>
					<div>
						<label>Name: </label>
						<input defaultValue={driver.name} onChange={this.handleChange} type="text" name="name" />
					</div>
					<div>
						<label>Car Plate: </label>
						<input defaultValue={driver.carPlate} onChange={this.handleChange} type="text" name="carPlate" />
					</div>
					<div className="edit-driver-actions">
						<button onClick={this.updateDriver} id="action_update">Update</button>
						<button onClick={this.goBack} id="action_back">Back</button>
					</div>
				</form>
			</div>
		)
	}
}