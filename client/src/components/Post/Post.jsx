import React from "react";
//import "./style.css";
import API from "../../utils/API";
// commenting out ReactDOM as it's called but never used.
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('body');

class Post extends React.Component {
    constructor() {
      super();
      this.state = {
        modalIsOpen: false,

      };
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      API.specificProfile().then(res => {
        this.setState({
          profile: res.data.profile
        });
      })
    }
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      
    }
   
    closeModal() {
      this.setState({modalIsOpen: false});
    }
    

render() {
  return(
      //card containing post
      <div className="card">
        <div className="card-body">
          <p className="card-title">
            Free Samples
            <span className="date">6/17/19 2:30pm Seattle, WA</span>
            <span><button type="button" className="btn btn-secondary btn-sm">Edit Post</button></span>
          </p>

          <p className="card-text">We would like to provide samples of our newest summer smoothies to businesses in the area.</p>
          <button className="btn btn-primary" onClick={this.openModal}>More Info</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal">
              </Modal>
        </div>
      </div>
    )
  }
}

export default Post;
