import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ isVisible }) => {
  return (
    <div className="Wrapper">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isVisible}
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  isVisible: PropTypes.bool,
};
