import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import NavBar from './NavBar';
import Main from './Main';
import About from './About'
import Login from '../components/Login'



class App extends Component {
	state = {
        username: '',
        password: ''
	}
	
	setInfo = (e, {name, value}) => {
		this.setState({
			[name]: value 
		})
	}

	onLoginSubmit = () => {
		// console.log('submitting ', this.state.username, this.state.password)
	}

	render() {
		return (
			<div className="App">
				<NavBar />
				<Switch>
					<Route path='/login' render={() => 
						<Login 
							setField={this.setInfo} 
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
