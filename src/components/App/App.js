import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    showModal: false,
    hitsName: '',
  };

  hendleFormSubmit = hitsName => {
    this.setState({ hitsName });
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    const { showModal, hitsName } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <ImageGallery hitsName={hitsName} />
        <ToastContainer autoClose={3000} />
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello bro</h1>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )} */}
      </>
    );
  }
}

export default App;
