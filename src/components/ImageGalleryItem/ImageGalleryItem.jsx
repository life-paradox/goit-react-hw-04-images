import PropTypes from 'prop-types';

const ImageGalleryItem = ({ data, src, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" data={data} src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  data: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
