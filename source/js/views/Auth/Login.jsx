import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { loginAction } from  'actions/auth/auth.js'
import { routeCodes } from 'views/App'
import Centerbox from 'components/Global/Centerbox'

@connect(state => ({
	success: state.auth.get('login'), 
	message: state.auth.get('message')
}))
export default class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '', 
			success: false, 
			message: '', 
			username_error: '',
			password_error: '', 
			error: true
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	update_status(curState) {

		if(curState.username == '') {
			curState = Object.assign({}, curState, {username_error: 'This field is required'}); 
		} else {
			curState = Object.assign({}, curState, {username_error: ''}); 
		}
		if(curState.password == '') {
			curState = Object.assign({}, curState, {password_error: 'This field is required'}); 
		} else {
			curState = Object.assign({}, curState, {password_error: ''}); 
		}

		let error_c = !((curState.username_error == '') && (curState.password_error == ''))

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

	handleLogin(event) {
		event.preventDefault();

		const { dispatch } = this.props;
		dispatch(loginAction(this.state.username, this.state.password))
	}

	render() {
		const {
			success, 
			message
		} = this.props;
		if(success != true) {
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
							name='password'
							errorText={ this.state.password_error }
						/> <br/> <br/>

						<RaisedButton 
							label="Login" 
							onClick={this.handleLogin}
							primary={true}
							disabled={ this.state.error }
						/>
					</div>
				</Centerbox>
			); 
		} else {
			this.props.history.push(routeCodes.DASHBOARD);
			return null;
		}
	}
}
