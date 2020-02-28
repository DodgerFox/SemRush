import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import 'Header.styl'

class Header extends React.Component {
    render() {
      return (
        <header>
            <Route path={"/"}>
                <img src="" alt=""/>
            </Route>
        </header>
      );
    }
  }

  export default Header;