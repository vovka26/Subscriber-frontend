import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import About from './About'
import Login from '../components/Login'



class App extends Component {
	state = {
        username: '',
		password: '',
		loginButton: true
	}
	
	setInfo = (e, {name, value}) => {
		this.setState({
			[name]: value 
		})
	}

	onLoginSubmit = () => {
		this.setState({
			loginButton: false
		})
	}

	render() {
		return (
			<div className="App">
				<NavBar 
					loginStatus={this.state.loginButton}
					username={this.state.username}
				/>
				<Switch>
					<Route path='/login' render={() => 
						<Login 
							setField={this.setInfo} 
							goToSubscriptions={this.goToSubscriptions}
							onSubmit={this.onLoginSubmit}
						/>
					} />
					<Route path='/dashboard' component={Main} />
					<Route path='/subscriptions' component={Main} />
					<Route component={About} />
				</Switch>
			</div>
		);
	}
}

export default App;
