import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import { fetchImages } from '../api/imagesApi';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onSubmit = input => {
    setLoaderVisibility(true);

    fetchImages(input, 1)
      .then(response => {
        setImages(response.data.hits);
        setCurrentQuery(input);
        setCurrentPage(1);

        buttonVisibilityHandler(response);
      })
      .finally(setLoaderVisibility(false));
  };

  const onLoadMore = () => {
    setLoaderVisibility(true);

    fetchImages(currentQuery, currentPage + 1)
      .then(response => {
        setImages(prevState => [...prevState, ...response.data.hits]);
        setCurrentPage(prevState => prevState + 1);
        buttonVisibilityHandler(response);
      })
      .finally(setLoaderVisibility(false));
  };

  const buttonVisibilityHandler = arr => {
    if (arr.data.hits.length === 12) {
      setButtonVisibility(true);
    } else {
      setButtonVisibility(false);
    }
  };

  const handleClickImage = e => {
    const elem = e.target;
    if (!elem.classList.contains('ImageGalleryItem-image')) {
      return;
    }
    setCurrentImage(e.target.getAttribute('data'));
    toggleModal();
  };

  useEffect(() => {
    window.addEventListener('click', handleClickImage);

    return () => {
      window.removeEventListener('click', handleClickImage);
    };
  });

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {images && images.length > 0 && <ImageGallery images={images} />}
      {loaderVisibility && <Loader />}
      {buttonVisibility && <Button onClick={onLoadMore} />}
      {showModal && <Modal onClose={toggleModal} src={currentImage} />}
    </div>
  );
};

export default App;
