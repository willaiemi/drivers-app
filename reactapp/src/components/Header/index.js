// imports...
import React from "react"

import './styles.css'
import Navbar from "../Navbar"

// render the Header
const Header = () => {
	return (
		<header id="main_header">
			<h1>Drivers-app</h1>
			<Navbar />
		</header>
	)
}

export default Header