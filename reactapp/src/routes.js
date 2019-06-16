import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import List from './pages/list'
import EditDriver from './pages/edit-driver'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/drivers" component={List} />
			<Route path="/drivers/:id" component={EditDriver} />
		</Switch>
	</BrowserRouter>
)

export default Routes;