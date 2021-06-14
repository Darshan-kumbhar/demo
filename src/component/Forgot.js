import React, { Component } from 'react';
import { Header, Input } from './reusable';
import { Redirect } from 'react-router-dom';
class Forgot extends Component {
	state = {
		email: '',
	};
	handleChange = (e) => {
		// console.log(e.target.value);
		this.setState({
			email: e.target.value,
		});
		console.log(this.state.email);
	};
	Reset = () => {
		if (this.state.email) {
			alert('Password reset message was sent to your Email-Id ' + this.state.email);
		}
	};
	render() {
		return (
			<form onSubmit={this.Reset}>
				<Header Title='Forgot Password' />

				<div className='form-group'>
					<label>Email</label>
					<Input
						type='email'
						name='email'
						onChange={this.handleChange}
						className='form-control'
						placeholder='Enter email'
					/>
				</div>
				<div class='text-center mt-3'>
					<button type='submit' className='btn btn-dark btn-lg btn-block'>
						Reset Password
					</button>
				</div>
			</form>
		);
	}
}
export default Forgot;
