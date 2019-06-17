import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import List from './pages/list'
import EditDriver from './pages/edit-driver'
import CreateDriver from './pages/create-driver'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/drivers" component={List} />
			<Route path="/drivers/new" component={CreateDriver} />
			<Route path="/drivers/:id" component={EditDriver} />
		</Switch>
	</BrowserRouter>
)

export default Routes;