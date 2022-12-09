import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        const { id, largeImageURL, webformatURL, alt, likes, pageURL, tags } =
          image;
        return (
          <ImageGalleryItem
            key={id}
            data={largeImageURL}
            src={webformatURL}
            alt={alt}
            likes={likes}
            pageURL={pageURL}
            tags={tags}
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
