import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const {
    src, alt, className, progressive, isBackground,
  } = props;

  const type = progressive ? 'progressive' : 'default';

  return (
    <div className={`img__${type} img__${type}_${className} ${isBackground ? 'img__progressive_background' : ''}`}>
      <img className="img__inner" src={src} alt={alt} />
    </div>
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  progressive: PropTypes.bool,
  isBackground: PropTypes.bool,
};

Img.defaultProps = {
  progressive: false,
  isBackground: false,
};

export default Img;
