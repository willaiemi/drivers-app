// imports
import React from 'react'
import './styles.css'

// render navbar
const Navbar = () => {
	return (
		<div className="navbar">
			<a href="/map">Map</a>
			<a href="/">Home</a>
			<a href="/drivers">Drivers</a>
		</div>
	)
}

export default Navbar