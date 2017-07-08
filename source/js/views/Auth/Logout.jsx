import React, { Component } from 'react';
import { logoutAction } from  'actions/auth/auth.js'
import { routeCodes } from 'views/App'
import { connect } from 'react-redux';

@connect(state => ({
	login: state.auth.get('login')
}))
export default class Logout extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			login: false
		}
	}

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(logoutAction());
	}
	render() {
		const {
			login
		} = this.props;
		if(login == false) {
			this.props.history.push(routeCodes.DASHBOARD);
		}
		return null;
		
	}
}
