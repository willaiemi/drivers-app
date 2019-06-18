import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

// renders the MainMenu
const MainMenu = () => {
	return (
		<div className="main-menu">
			<div>
				<h2>The Driver List</h2>
				<p>Access the Driver list to see all drivers in the Database.</p>
				<Link to="/drivers">Access</Link>
			</div>
			<div>
				<h2>The Map</h2>
				<p>Access the map to see where each Driver is at.</p>
				<Link to="/map">Access</Link>
			</div>
		</div>
	)
}

export default MainMenu