import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Webinars from './views/Webinars';


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