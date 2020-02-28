import React from 'react';
import Modal from '../components/Modal/Modal'
import Header from '../components/Header/Header'
import Welcome from '../components/Welcome/Welcome'
import Articles from '../components/Articles/Articles'

class Webinars extends React.Component {
    state = {
      modal: false
    }
    modal = (value) => {
        this.setState({ modal: value })
        console.log(this.state.modal + ' parent');
    }
    render() {
      return (
        <main className="main">
          <Header />
          <Welcome modal={this.modal}/>
          <Articles />
          <Modal open={this.modal}/>
        </main>
      );
    }
  }

  export default Webinars;