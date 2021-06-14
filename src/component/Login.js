import React, { Component } from 'react';
import { Header, Input } from './reusable';
import { Redirect } from 'react-router-dom';
class Login extends Component {
	state = { email: '', pass: '', loggedIn: false };

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		console.log(this.state);
	};

	submitData = (e) => {
		const { email, pass } = this.state;
		if (email && pass) {
			this.setState({
				loggedIn: true,
			});
		}
		e.preventDefault();
	};

	render() {
		if (this.state.loggedIn) {
			return <Redirect to='/home' />;
		}
		return (
			<form onSubmit={this.submitData}>
				<Header Title='Log in' />

				<div className='form-group'>
					<label>Email</label>
					<Input
						type='email'
						className='form-control'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
						placeholder='Enter email'
					/>
				</div>

				<div className='form-group'>
					<label>Password</label>
					<Input
						type='password'
						className='form-control'
						name='pass'
						value={this.state.pass}
						onChange={this.handleChange}
						placeholder='Enter password'
					/>
				</div>

				<div className='form-group'>
					<div className='custom-control custom-checkbox'>
						<Input type='checkbox' className='custom-control-input' id='customCheck1' />
						<label className='custom-control-label' htmlFor='customCheck1'>
							Remember me
						</label>
					</div>
				</div>
				<div class='text-center mt-3'>
					<button type='submit' className='btn btn-dark btn-lg btn-block'>
						Sign in
					</button>
				</div>

				<p className='forgot-password text-right'>
					Forgot <a href='/forgot'>password?</a>
				</p>
			</form>
		);
	}
}

export default Login;
