import { Map } from 'immutable';


import {
  LOGIN_ACTION,
  LOGOUT_ACTION, 
  SIGNUP_ACTION,
} from 'actions/auth/auth';

const initialState = Map({
  login: false,
  message: '',
});

const actionsMap = {
	[LOGIN_ACTION]: (state, action) => {
		return state.merge({
			login: action.data.status, 
			message: action.data.message
		});
	},

	[SIGNUP_ACTION]: (state, action) => {
		return state.merge({
			login: false, 
			message: action.data.message
		});
	},

	[LOGOUT_ACTION]: (state) => {
		return state.merge({
			login: false, 
			message: 'Logged Out'
		})
	}
};

export default function reducer(state = initialState, action = {}) {
	const fn = actionsMap[action.type];
	return fn ? fn(state, action) : state;
}
