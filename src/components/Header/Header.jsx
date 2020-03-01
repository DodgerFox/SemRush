import React from 'react';
import {Route} from 'react-router-dom';
import './Header.sass'
import logo from '../../assets/images/logo.svg'

class Header extends React.Component {
    render() {
      return (
        <header>
            <Route path={"/"}>
              <img src={logo} alt="semrush logo" />
            </Route>
        </header>
      );
    }
  }

  export default Header;