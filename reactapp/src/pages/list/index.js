// LIST TO DISPLAY ALL DRIVERS
import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

export default class List extends Component {
	state = {
		drivers: [],
		driversInfo: {},
		page: 1
	}

	componentDidMount() {
		// when component mount, load the drivers
		this.loadDrivers();
	}

	loadDrivers = async (page = 1) => {
		// get the drivers from the Node API
		const response = await api.get(`/drivers?page=${page}`)

		const { docs, ...driversInfo} = response.data

		// save drivers in state
		this.setState({ drivers: docs, driversInfo, page})
	}

	// go to previous page
	previousPage = () => {
		// get page from state
		const { page } = this.state

		// if the actual page is the first one, there's no previous page
		if (page === 1) return

		const pageNumber = page - 1

		this.loadDrivers(pageNumber)
	}

	// go to next page
	nextPage = () => {
		// get page from state
		const { page, driversInfo } = this.state

		// if the actual page is the last one(same number of total pages), there's no next page
		if (page === driversInfo.pages) return

		const pageNumber = page + 1

		this.loadDrivers(pageNumber)
	}

	// delete a driver
	deleteDriver = async (e, id) => {
		await api.delete(`/drivers/${id}`)

		this.loadDrivers(this.state.page)
	}

	render() {
		const { drivers, driversInfo, page } = this.state

		return (
			<div className="driver-list">
				<Link className="new-driver" to={"/drivers/new"}>New</Link>
				{drivers.map(driver => {
					return (
						<article key={driver._id}>
							<div>
								<strong>{driver.name}</strong>
								<div className="driver-actions">
									<Link to={`/drivers/${driver._id}`} id="action_edit"></Link>
									<Popup trigger={<button id="action_delete"></button>}
										position="top right"
									>
										<div className="delete-popup">
											<div>
												<p>Are you sure you want to delete {driver.name}?</p>
											</div>
											<div>
												<button onClick={(e) => { this.deleteDriver(e, driver._id) }}>Delete</button>
											</div>
										</div>
									</Popup>
								</div>
							</div>
							<p>{driver.carPlate}</p>

							<Link id="a_map" to={`/map/${driver._id}`}>View on map</Link>
						</article>
					)
				})}

				<div className="actions">
					<button disabled={ page === 1 } onClick={this.previousPage}>Previous</button>
					<button disabled={ page === driversInfo.pages} onClick={this.nextPage}>Next</button>
				</div>
			</div>
		)
	}
}