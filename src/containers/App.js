import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import NavBar from './NavBar';
import Main from './Main';
import About from './About'



class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Switch>
					<Route path='/dashboard' component={Main} />
					<Route path='/subscriptions' component={Main} />
					<Route component={About} />
				</Switch>
			</div>
		);
	}
}

export default App;
