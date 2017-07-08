import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import workAndCoLogoImg from '../../../assets/img/logo.png';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

@connect(state => ({
  loggedin: state.auth.get('login'), 
}))
export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
    }
  }

  render() {
    const {
      loggedin
    } = this.props;
    return (
      <div className='Menu'>

        <div className='Menu-links'>
          { loggedin ? 
              <NavLink 
                activeClassName="Menu-link--active" 
                className='Menu-link' 
                to={ routeCodes.LOGOUT}> 
                <FlatButton 
                  label="Logout" 
                  className="nav-button" 
                  hoverColor="white"
                />
              </NavLink>
          :
            <div>
              <NavLink
                activeClassName='Menu-link--active'
                className='Menu-link'
                to={ routeCodes.LOGIN } >
                <FlatButton 
                  label="Login" 
                  className="nav-button" 
                  hoverColor="white"
                />
              </NavLink>
              <NavLink
                activeClassName='Menu-link--active'
                className='Menu-link'
                to={ routeCodes.REGISTER } >
                <FlatButton 
                  label="Sign Up" 
                  className="nav-button" 
                  hoverColor="white"
              />
              </NavLink>
            </div>
          }
          
        </div>
      </div>
    );
  }
}
