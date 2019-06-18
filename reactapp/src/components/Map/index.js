// imports...
import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

// Map Components
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

// API key
import key from '../../services/google-maps-api-key.js'

export default class Map extends Component {
	constructor(props) {
		super(props)
		this.state = {
			latLng: {},
			isLoaded: false
		}
	}

	async componentDidMount() {
		this.loadDriver()
	}

	loadDriver = async () => {
		// get the driver id from the props and use it to get the driver info on the API
		const driver = await api.get(`/drivers/${this.props.driver_id}`)

		// save drivers location coordinates to latLng
		const latLng = {
			lat: driver.data.locationLatitude,
			lng: driver.data.locationLongitude
		}
		
		await this.setState({ latLng, isLoaded: true })
	}

	componentDidUpdate() {
		// if information is not loaded, load it
		if (!this.state.isLoaded) {
			this.loadDriver()
		}
	}

	renderMap() {
		// if information is not loaded, display "Loading" on the screen
		if (!this.state.isLoaded) {
			return (
				<p>Loading</p>
			)
		}
		// return the map rendered
		const {latLng} = this.state
		return (
			<LoadScript
				googleMapsApiKey={key}
			>
				<GoogleMap
				mapContainerStyle={{
					height: "100%",
					width: "100%"
				}}
				zoom={14}
				center={latLng}
				>
					<Marker
						position={latLng}
					/>
				</GoogleMap>
			</LoadScript>	
		)
	}

	render() {
		return (
			<div className="map_component_holder">
				{ this.renderMap() }
			</div>
		)
	}
}