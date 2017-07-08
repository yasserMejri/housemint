import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { signupAction } from  'actions/auth/auth.js'
import { connect } from 'react-redux';
import Centerbox from 'components/Global/Centerbox'

@connect(state => ({
	success: state.auth.get('login'), 
	message: state.auth.get('message')
}))
export default class Register extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '', 
			password2: '',
			success: false, 
			message: '',
			wrong_password: false, 
			username_error: '',
			password_error: '',
			password2_error: '',
			error: true
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handlePassword2Change = this.handlePassword2Change.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
	}

	update_status(curState) {

		if(curState.username == '') {
			curState = Object.assign({}, curState, {username_error: 'This field is required'})
		} else {
			curState = Object.assign({}, curState, {username_error: ''})
		}

		if(curState.password == '') {
			curState = Object.assign({}, curState, {password_error: 'This field is required'})
		} else {
			curState = Object.assign({}, curState, {password_error: ''})
		}

		if(curState.password2 == '') {
			curState = Object.assign({}, curState, {password2_error: 'This field is required'})
		}

		if(curState.password2 != curState.password) {
			curState = Object.assign({}, curState, {password2_error: 'Password doesn\'t match'})
		} else {
			curState = Object.assign({}, curState, {password2_error: ''})
		}

		let error_c = !((curState.username_error == '') && (curState.password_error == '') && (curState.password2_error == ''))

		curState = Object.assign({}, curState, {error: error_c});

		this.setState(curState);

	}

	handleUsernameChange(e) {
		let nextState = Object.assign({}, this.state, {username: e.target.value});
		this.update_status(nextState);
	}

	handlePasswordChange(e) {
		let nextState = Object.assign({}, this.state, {password: e.target.value});
		this.update_status(nextState);
	}

	handlePassword2Change(e) {
		let nextState = Object.assign({}, this.state, {password2: e.target.value});
		this.update_status(nextState)
	}

	handleSignup(event) {
		event.preventDefault();

		if(this.state.password != this.state.password2) {
			alert("Password doesn't match!"); 
			this.setState({wrong_password: true})
			return
		}


		const { dispatch } = this.props;
		dispatch(signupAction(this.state.username, this.state.password))
	}

	render() {
		return (
			<Centerbox>
				<div className="content auth-form">
					<TextField 
						placeholder="Username" 
						type="text" 
						onChange={this.handleUsernameChange}
						name='username'
						errorText={ this.state.username_error }
					/> <br/>

					<TextField 
						placeholder="Password" 
						type="password" 
						onChange={this.handlePasswordChange}
						name="password"
						errorText={ this.state.password_error }
					/> <br/>

					<TextField 
						placeholder="Password Confirm" 
						type="password" 
						onChange={this.handlePassword2Change}
						name="password2"
						errorText={ this.state.password2_error }
					/> <br/> <br/>

					<RaisedButton 
						label="Sign up" 
						onClick={this.handleSignup}
						primary={true} 
						disabled={this.state.error}
					/>

				</div>
			</Centerbox>
		); 
	}
}
