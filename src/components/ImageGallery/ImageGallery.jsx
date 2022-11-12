import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        const { id, largeImageURL, webformatURL, alt } = image;
        return (
          <ImageGalleryItem
            key={id}
            data={largeImageURL}
            src={webformatURL}
            alt={alt}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
};
