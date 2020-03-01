import React from 'react';
import './Welcome.sass'

class Welcome extends React.Component {
    openModal () {
      this.props.modal(true)
    }
    render() {
      return (
        <section className="welcome">
          <div className="wrap">
              <h1 className="welcome__title">Webinars</h1>
              <p className="welcome__text">Here you can register and take part in educational webinars conducted by the best digital marketing experts.</p>
              <div className="welcome__button" onClick={this.openModal.bind(this)}>Add new</div>
          </div>
        </section>
      );
    }
  }

  export default Welcome;