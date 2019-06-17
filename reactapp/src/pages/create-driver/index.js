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

		await this.setState({ driver: { ...this.state.driver, [name]: value } })
	}

	createDriver = async (event) => {
		event.preventDefault()

		const { driver } = this.state
		await api.post('/drivers', driver)
		
		this.props.history.push(`/drivers`)
	}

	goBack = (event) => {
		event.preventDefault()

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