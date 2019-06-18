import React, { Component } from 'react'
import './styles.css'
import api from '../../services/api'

export default class CreateDriver extends Component {
	state = {
		driver: {
			name: "",
			carPlate: "",
			locationLatitude: "",
			locationLongitude: ""
		}
	}

	handleChange = async (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		// if there's a change in some input, save the change in the driver info
		await this.setState({ driver: { ...this.state.driver, [name]: value } })
	}

	createDriver = async (event) => {
		// prevent bad things from happening
		event.preventDefault()

		const { driver } = this.state
		// create the new driver in the database
		await api.post('/drivers', driver)
		
		// redirect to the drivers list
		this.props.history.push(`/drivers`)
	}

	goBack = (event) => {
		// prevent bad things from happening
		event.preventDefault()

		// redirect to the drivers list
		this.props.history.push('/drivers')
	}

	render () {
		return (
			<div className="create-driver">
				<form>
					<div>
						<label>Name: </label>
						<input onChange={this.handleChange} type="text" name="name" />
					</div>
					<div>
						<label>Car Plate: </label>
						<input onChange={this.handleChange} type="text" name="carPlate" />
					</div>
					<div>
						<label>Latitude: </label>
						<input onChange={this.handleChange} type="text" name="locationLatitude" />
					</div>
					<div>
						<label>Longitude: </label>
						<input onChange={this.handleChange} type="text" name="locationLongitude" />
					</div>
					<div className="create-driver-actions">
						<button onClick={this.createDriver} id="action_create">Create</button>
						<button onClick={this.goBack} id="action_back">Back</button>
					</div>
				</form>
			</div>
		)
	}
}