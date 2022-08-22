// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// Components
import Img from '../../../global/Img';

// Harddata
// import reviewsStarImg from '../../../../assets/images/pages/index/index-reviews/reviews-star.svg';

function ReviewsStars() {
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          reviewsStar {
            alternativeText
            localFile {
              url
            }
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiPageIndex.nodes[0].reviewsStar;

  const {
    alternativeText,
    localFile: {
      url,
    },
  } = DATA;

  return (
    <div className="reviews__stars">
      <Img src={url} alt={alternativeText} className="star" />
      <Img src={url} alt={alternativeText} className="star" />
      <Img src={url} alt={alternativeText} className="star" />
      <Img src={url} alt={alternativeText} className="star" />
      <Img src={url} alt={alternativeText} className="star" />
    </div>
  );
}

export default ReviewsStars;
