import React from 'react';
import Header from '../components/Header/Header'
import Welcome from '../components/Welcome'
import Articles from '../components/Articles'

class Webinars extends React.Component {
    render() {
      return (
        <main className="main">
          <Header />
          <Welcome />
          <Articles />
        </main>
      );
    }
  }

  export default Webinars;