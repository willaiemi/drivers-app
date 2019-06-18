import React, { Component } from 'react'
import './styles.css'
import Map from '../../components/Map'
import api from '../../services/api'

export default class MapPage extends Component {
	state = {
		driver: {
			name: "",
			carPlate: ""
		}
	}

	async componentDidMount () {
		const { id } = this.props.match.params

		if (id === undefined) {
			const response = await api.get('/drivers')
			const [driver] = response.data.docs
			this.props.history.push(`/map/${driver._id}`)
		}

		const response = await api.get(`/drivers/${id}`)
		const driver = response.data
		console.log(driver)
		await this.setState({ driver })
	}

	render() {
		const {driver} = this.state
		return (
			<div className="map_div">
				<article>
					<Map driver_id={this.props.match.params.id} />
				</article>
				<div className="options">
					<button>Previous</button>
					<h2>{`${driver.name} - ${driver.carPlate}`}</h2>
					<button>Next</button>
				</div>
			</div>
		)
	}
}

