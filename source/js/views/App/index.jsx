import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';

import Login from 'views/Auth/Login.jsx';
import Logout from 'views/Auth/Logout.jsx';
import Register from 'views/Auth/Register.jsx';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Logo from 'components/Global/Logo';
import { NavLink } from 'react-router-dom';


const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  LOGIN: `${ publicPath }login`, 
  LOGOUT: `${ publicPath }logout`, 
  REGISTER: `${ publicPath }register`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <AppBar
          title={ 
            <NavLink 
              className='home-link'
              to={ routeCodes.DASHBOARD }>
              <Logo width="64px" style="inline" text="House Mint" /> 
              </NavLink>}
          iconElementRight={ <Menu /> }
          />
          <div className='Page'>
            <Switch>
              <Route exact path={ publicPath } component={ Dashboard } />
              <Route path={ routeCodes.ABOUT } component={ About } />
              <Route path={ routeCodes.LOGIN } component={ Login } />
              <Route path={ routeCodes.LOGOUT } component={ Logout } />
              <Route path={ routeCodes.REGISTER } component={ Register } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
