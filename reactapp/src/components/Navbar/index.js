import React, { Component } from 'react'
import './styles.css'

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