import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Webinars from './views/Webinars';
import './assets/styles/optimize.css'
import './assets/styles/fonts.css'
import './assets/styles/base.css'
import './assets/styles/mixins/mixins.sass'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={Webinars} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;