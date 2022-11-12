import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import { fetchImages } from '../api/imagesApi';

class App extends Component {
  state = {
    currentPage: 1,
    loaderVisibility: false,
    showModal: false,
    currentImage: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onSubmit = ({ input }) => {
    this.setState({ loaderVisibility: true });

    fetchImages(input, 1)
      .then(response => {
        this.setState({
          images: response.data.hits,
          currentQuery: input,
          currentPage: 1,
        });
      })
      .finally(this.setState({ loaderVisibility: false }));
  };

  onLoadMore = () => {
    this.setState({ loaderVisibility: true });
    const { currentQuery, currentPage } = this.state;

    fetchImages(currentQuery, currentPage + 1)
      .then(promise => {
        this.setState(prevState => ({
          images: [...prevState.images, ...promise.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(this.setState({ loaderVisibility: false }));
  };

  handleClickImage = e => {
    const elem = e.target;
    if (!elem.classList.contains('ImageGalleryItem-image')) {
      return;
    }
    this.setState({ currentImage: e.target.getAttribute('data') });
    this.toggleModal();
  };

  componentDidMount() {
    window.addEventListener('click', this.handleClickImage);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickImage);
  }

  render() {
    const { images, loaderVisibility, showModal, currentImage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {images && images.length > 0 && <ImageGallery images={images} />}

        <Loader isVisible={loaderVisibility} />
        {images && images.length > 0 && <Button onClick={this.onLoadMore} />}
        {showModal && <Modal onClose={this.toggleModal} src={currentImage} />}
      </div>
    );
  }
}

export default App;
