import React, {Component} from 'react'
import logo from '../../../assets/img/logo.png';

export default class Logo extends Component {

	render() {
		return (
			<div className = {this.props.className} style={{display: 'flex' }} >
				<img src={logo} alt="House Mint" width={this.props.width} height={this.props.width} />
				<span> &nbsp; { this.props.text } </span>
			</div>
		); 
	}
}
