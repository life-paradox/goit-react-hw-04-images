import PropTypes from 'prop-types';
import { memo } from 'react';

const ImageGalleryItem = ({ data, src, alt, likes, tags, pageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" data={data} src={src} alt={alt} />
      <div className="ImageGalleryItem-overlay" data={data}>
        <ul className="ImageGalleryItem-info Info-list">
          <li className="Info-item">
            Likes: <span className="Info-value">{likes}</span>
          </li>
          <li className="Info-item">
            Tags: <span className="Info-value">{tags}</span>
          </li>
          <li className="Info-item">
            Link:{' '}
            <a
              href={pageURL}
              target="_blank"
              className="Info-link"
              rel="noreferrer"
            >
              click
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default memo(ImageGalleryItem);

ImageGalleryItem.propTypes = {
  data: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  pageUrl: PropTypes.string,
};
