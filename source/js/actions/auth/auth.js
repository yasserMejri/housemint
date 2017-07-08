import { login, logout, signup } from 'api/authApi';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const SIGNUP_ACTION = 'SIGNUP_ACTION';
export const ERROR_ACTION = 'ERROR_ACTION'


function loginReducer(data) {
	console.log("Login Resolved with following result");
	console.log(data);
	return {
		type: LOGIN_ACTION, 
		data
	};
}

function logoutReducer(data) {
	return {
		type: LOGOUT_ACTION, 
		data
	};
}

function signupReducer(data) {
	return {
		type: SIGNUP_ACTION, 
		data
	};
}

function errorAction(error) {
	return {
		type: ERROR_ACTION, 
		error
	};
}

export function loginAction(username, password) {
	return function(dispatch) {
		login(username, password)
			.then(data => dispatch(loginReducer(data)))
			.catch(error => dispatch(errorAction(error)))
	};
}

export function logoutAction() {
	return function(dispatch) {
		logout()
			.then(data => dispatch(logoutReducer(data)))
			.catch(error => dispatch(errorAction(error)))
	};
}

export function signupAction(username, password) {
	return function(dispatch) {
		siguup(username, password)
			.then(data => dispatch(signupReducer(data)))
			.catch(error => dispatch(errorAction(error)))
	}
}


