import React, { Component } from 'react';

export default class Centerbox extends Component {
	render() {
		return (
			<div className="center-box">
				{this.props.children}
			</div>
		); 
	}
}
