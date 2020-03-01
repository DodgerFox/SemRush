import React, {useCallback} from 'react';
import Dropzone from './Dropzone'
import './Modal.sass'
import close from '../../assets/images/icon_close.svg'
import iconDelete from '../../assets/images/icon_delete.svg'

console.log(useCallback);

class Modal extends React.Component {
    state = {
        modal: false,
        title: '',
        text: ''
    }
    handleClick () {
        this.props.open(!this.props.open)
    }
    handleSubmit (e) {
        e.preventDefault()
    }
    handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }
    componentWillReceiveProps() {
        this.setState({modal: !this.state.modal});        
    }
    onDrop = (acceptedFiles) => {        
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (e) => {            
            this.setState({
                image: e.target.result
            });
        }
        reader.readAsDataURL(file);        
        return file
      }
    deleteImage () {
        this.setState({image: null});   
    }
    
    render() {
      return (
        <section className={`modal ${this.state.modal ? "" : "hidden"}`} >
          <div className="wrap">
              <form className="modal-form" onSubmit={this.handleSubmit.bind(this)}>

                  <div className="modal-close" onClick={this.handleClick.bind(this)}>
                      <img src={close} alt="icon close" />
                  </div>
                  <h2 className="modal__title">Add new</h2>
                  {
                      this.state.image ? (
                        <div className="modal-image" style={{ backgroundImage: `url(${ this.state.image })` }}>
                            <div className="modal-image__delete" onClick={this.deleteImage.bind(this)} >
                                <img src={iconDelete} alt="icon delete" />
                            </div>
                        </div>
                      ) : (
                        <Dropzone onDrop={this.onDrop.bind(this)} accept={"image/*"} />
                      )
                  }
                  <div className="modal-item">
                      <label htmlFor="article-title">Title</label>
                      <input type="text" id="article-title" name="title" value={this.state.title} onChange={this.handleChange.bind(this)} placeholder="Enter title" required />
                  </div>
                  <div className="modal-item">
                      <label htmlFor="article-desc">Description</label>
                      <textarea id="article-desc" name="text" value={this.state.text} onChange={this.handleChange.bind(this)} placeholder="Enter title" required />
                  </div>
                  <input type="submit" className="modal__button" value="Save" />
                  
              </form>
                <div className="modal-zone" onClick={this.handleClick.bind(this)}></div>
          </div>
        </section>
      );
    }
  }

  export default Modal;