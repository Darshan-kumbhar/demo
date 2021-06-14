import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Forgot from './component/Forgot';

function App() {
	return (
		<Router>
			<div className='App'>
				<nav className='navbar navbar-expand-lg navbar-light fixed-top'>
					<div className='container'>
						<Link className='navbar-brand' to={'/sign-in'}>
							Demo
						</Link>
						<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
							<ul className='navbar-nav ml-auto'>
								<li className='nav-item'>
									<Link className='nav-link' to={'/sign-in'}>
										Sign in
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to={'/sign-up'}>
										Sign up
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className='outer'>
					<div className='inner'>
						<Switch>
							<Route exact path='/' component={Login} />
							<Route path='/sign-in' component={Login} />
							<Route path='/sign-up' component={SignUp} />
							<Route path='/home' component={Home} />
							<Route path='/forgot' component={Forgot} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
