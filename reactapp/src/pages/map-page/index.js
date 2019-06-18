import React, { Component } from 'react'
import './styles.css'
import Map from '../../components/Map'
import api from '../../services/api'

export default class MapPage extends Component {
	state = {
		driver: {
			name: "",
			carPlate: ""
		},
		// buttons are desabled until they know where they need to point to
		buttonsReady: false
	}

	renderButtons = () => {
		//TODO
	}

	async componentDidMount () {
		// when component mount, load driver info
		await this.loadDriverInfo()
	}

	loadDriverInfo = async () => {
		// get the id from the address
		const { id } = this.props.match.params

		// if id is not defined
		if (id === undefined) {
			// get all drivers
			const response = await api.get('/drivers')

			// get data from the first one
			const [driver] = response.data.docs

			// redirect to driver map
			this.props.history.push(`/map/${driver._id}`)
		}

		// get driver info
		const response = await api.get(`/drivers/${id}`)

		// save driver info
		const driver = response.data

		// render the buttons
		this.renderButtons();

		// save changes to state
		await this.setState({ ...this.state, driver })
	}

	componentDidUpdate() {
		// if component updated, but still does not have a driver, load the driver info again
		if (!this.state.driver.name) {
			this.loadDriverInfo()
		}
	}

	render() {
		const {driver} = this.state
		return (
			<div className="map_div">
				<article>
					<Map driver_id={this.props.match.params.id} />
				</article>
				<div className="options">
					<button disabled={!this.state.buttonsReady}>Previous</button>
					<h2>{`${driver.name} - ${driver.carPlate}`}</h2>
					<button disabled={!this.state.buttonsReady}>Next</button>
				</div>
			</div>
		)
	}
}

