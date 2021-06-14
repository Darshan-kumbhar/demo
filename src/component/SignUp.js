import React, { Component } from 'react';
import { Header, Input } from './reusable';
import { Redirect } from 'react-router-dom';
class SignUp extends Component {
	state = {
		email: '',
		pass: '',
		isLoggedIn: false,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		console.log(this.state);
	};

	SubmitForm = () => {
		const { email, pass } = this.state;
		if (email && pass) {
			this.setState({
				isLoggedIn: true,
			});
		}
	};
	render() {
		if (this.state.isLoggedIn) {
			return <Redirect to='/home' />;
		}
		return (
			<form onSubmit={this.SubmitForm}>
				<Header Title='Register' />

				<div className='form-group'>
					<label>First name</label>
					<Input type='text' className='form-control' placeholder='First name' />
				</div>

				<div className='form-group'>
					<label>Last name</label>
					<Input type='text' className='form-control' placeholder='Last name' />
				</div>

				<div className='form-group'>
					<label>Email</label>
					<Input
						type='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
						className='form-control'
						placeholder='Enter email'
					/>
				</div>

				<div className='form-group'>
					<label>Password</label>
					<Input
						type='password'
						name='pass'
						value={this.state.pass}
						onChange={this.handleChange}
						className='form-control'
						placeholder='Enter password'
					/>
				</div>
				<div class='text-center mt-3'>
					<button type='submit' className='btn btn-dark btn-lg btn-block '>
						Register
					</button>
				</div>
				<p className='forgot-password text-right'>
					Already registered <a href='/sign-in'>log in?</a>
				</p>
			</form>
		);
	}
}
export default SignUp;
