/* eslint-disable react/require-default-props */
// React
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// React-Markdown
import ReactMarkdown from 'react-markdown';

// Hooks
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

// Components
import Img from '../../../global/Img';
import ReviewsStars from './ReviewsStars';
import Button from '../../../global/Button';

function ReviewsItem(props) {
  // Data
  const {
    review,
    button,
  } = props;

  const {
    avatar: {
      alternativeText: avatarAlt,
      url: avatarUrl,
    },
    name,
    content: {
      data: {
        content,
      },
    },
  } = review;

  const {
    label: btnLabel = 'Читать далее',
    icon: btnIcon = 'arrow-down',
  } = button;

  // Logic
  const { width: screenWidth } = useWindowDimensions();
  const isMobile = screenWidth < 768;

  const [readMore, setReadMore] = useState(content.length > 200);

  function readMoreBtnOnClick() {
    setReadMore((prev) => !prev);
  }

  useEffect(() => {
    if (isMobile) {
      setReadMore(content.length > 200);
    } else {
      setReadMore(false);
    }
  }, [isMobile]);

  return (
    <div className="reviews__item">
      <div className="item__author">
        <Img src={avatarUrl} alt={avatarAlt} className="author" />
        <p className="author__name">{name}</p>
      </div>

      <ReviewsStars />

      <div className="item__content">
        <ReactMarkdown>
          {readMore ? `${content.substring(0, 200)}... ` : content}
        </ReactMarkdown>

        {readMore && (
          <Button
            className="circle"
            onClick={() => readMoreBtnOnClick()}
            icon={btnIcon}
            label={btnLabel}
          />
        )}
      </div>
    </div>
  );
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    avatar: PropTypes.shape({
      alternativeText: PropTypes.string.isRequired,
      localFile: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }),
    name: PropTypes.string.isRequired,
    content: PropTypes.shape({
      data: PropTypes.shape({
        content: PropTypes.string.isRequired,
      }),
    }),
  }),
  button: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
  }),
};

export default ReviewsItem;
