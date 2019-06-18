import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import key from '../../services/google-maps-api-key.js'

export default class Map extends Component {
	constructor(props) {
		super(props)
		this.state = {
			latLng: {},
			isLoading: true
		}
	}

	async componentDidMount() {
		const driver = await api.get(`/drivers/${this.props.driver_id}`)

		const latLng = {
			lat: driver.data.locationLatitude,
			lng: driver.data.locationLongitude
		}
		
		await this.setState({ latLng, isLoading: false })
	}

	renderMap() {
		if (this.state.latLng.lat === undefined) {
			return (
				<p>Loading</p>
			)
		}
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