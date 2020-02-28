import React from 'react';
import './Modal.sass'
import close from '../../assets/images/icon_close.svg'
import image from '../../assets/images/icon_image.svg'

class Modal extends React.Component {
    state = {
        modal: true
    }
    handleClick () {
        this.setState({modal: !this.state.modal});
        this.props.open(this.state.modal)
        console.log(this.state.modal + ' modal');
    }
    render() {
      return (
        <section className={`modal ${this.state.modal ? "" : "hidden"}`}>
          <div className="wrap">
              <form className="modal-form">
                  <div className="modal-close" onClick={this.handleClick.bind(this)}>
                      <img src={close} />
                  </div>
                  <h2 className="modal__title">Add new</h2>
                  <div className="modal-image">
                      <img src={image} />
                      <p>select an image file to upload or drag it here</p>
                  </div>
                  <div className="modal-item">
                      <label htmlFor="article-title">Title</label>
                      <input type="text" id="article-title" placeholder="Enter title" />
                  </div>
                  <div className="modal-item">
                      <label htmlFor="article-desc">Description</label>
                      <textarea id="article-desc" placeholder="Enter title" />
                  </div>
                  <input type="submit" className="modal__button" value="Save" />
              </form>
          </div>
        </section>
      );
    }
  }

  export default Modal;