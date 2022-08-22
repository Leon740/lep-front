import React from 'react';
import PropTypes from 'prop-types';

function Icon({ className }) {
  return (
    <i className={`ic-${className}`} />
  );
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Icon;
