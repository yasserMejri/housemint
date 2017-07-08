import 'es6-promise';

function login(username, password) {
	return new Promise(resolve => {
		resolve(
			{
				status: true,
				message: 'Login Successful'
			}
		); 
	}); 
}

function logout() {
	return new Promise(resolve => {
		resolve({status: true}); 
	}); 
}

function signup(username, password) {
	return new Promise(resolve => {
		resolve({status: true}); 
	})
}

export { login, logout, signup };

