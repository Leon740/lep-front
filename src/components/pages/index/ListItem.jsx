// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Img from '../../global/Img';
import Button from '../../global/Button';

function ListItem(props) {
  const {
    type, className, src, alt, title, to, paragraph,
  } = props;

  // type: vertical || horizontal || hasParagraph
  const elType = paragraph ? 'hasParagraph' : type;

  return (
    <div className={`list__item list__item_${elType} ${className ? `list__item_${className}` : ''}`}>
      <Img src={src} alt={alt} className={className} />
      <div className="item__title">
        <h3 className="title__inner">
          {to ? (
            <Button className="secondary" to={to} label={title} />
          ) : (
            title
          )}
        </h3>
      </div>
      {paragraph && <p className="item__paragraph">{paragraph}</p>}
    </div>
  );
}

ListItem.propTypes = {
  type: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  paragraph: PropTypes.string,
};

ListItem.defaultProps = {
  type: 'vertical',
  to: '',
  paragraph: '',
};

export default ListItem;
