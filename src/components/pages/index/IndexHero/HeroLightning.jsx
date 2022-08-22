import React from 'react';
import PropTypes from 'prop-types';

function HeroLightning(props) {
  const { content, className } = props;

  return (
    <span className={className}>{content}</span>
  );
}

HeroLightning.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

HeroLightning.defaultProps = {
  content: '⚡⚡⚡',
  className: '',
};

export default HeroLightning;
