// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Col, Container, Row } from 'react-bootstrap';

// Components
import Img from '../../../global/Img';
import Button from '../../../global/Button';
import ReviewsStars from './ReviewsStars';
import ReviewsItem from './ReviewsItem';

// Harddata
// import reviewsGmapsImg from '../../../../assets/images/pages/index/index-reviews/reviews-gmaps.svg';
// import reviewsAuthorImg from '../../../../assets/images/pages/index/index-reviews/reviews-author.svg';

// const REVIEWS_DATA = {
//   place: {
//     img: {
//       src: reviewsGmapsImg,
//       alt: 'Light & Electric Products - Google reviews',
//     },
//     name: 'Электромонтажная компания “LEP”',
//     rating: '5.0',
//   },
//   reviews: [
//     {
//       id: 0,
//       img: reviewsAuthorImg,
//       name: 'Oleksandr Kotsar',
//       content: 'Отличные ребята. Разобрались в старой проводке, от которой, казалось, у меня взорвется голова)) Что надо заменили, что надо обновили, собрали маленькую, компактную и очень удобную щитовую в которой разберется теперь даже ребенок! Очень благодарен, планирую полную замену проводки в новом доме, обязательно приглашу ребят. Позитивный опыт. Быстро, качественно, с адекаватным бюджетом.',
//     },
//     {
//       id: 1,
//       img: reviewsAuthorImg,
//       name: 'Oleksandr Kotsar',
//       content: 'Отличные ребята. Разобрались в старой проводке, от которой, казалось, у меня взорвется голова)) Позитивный опыт. Быстро, качественно, с адекаватным бюджетом.',
//     },
//     {
//       id: 2,
//       img: reviewsAuthorImg,
//       name: 'Oleksandr Kotsar',
//       content: 'Отличные ребята. Разобрались в старой проводке, от которой, казалось, у меня взорвется голова)) Что надо заменили. Очень благодарен, планирую полную замену проводки в новом доме, обязательно приглашу ребят.',
//     },
//   ],
// };

function IndexReviews() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          reviewsTitle
          placeTitle
          placeRating
          placeImg {
            alternativeText
            url
          }
          reviewsItemButton {
            label
            icon
          }
          reviewsAllButton {
            label
            url
          }
        }
      }
      allStrapiIndexReview {
        nodes {
          id
          name
          content {
            data {
              content
            }
          }
          avatar {
            alternativeText
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query);

  const {
    reviewsTitle,
    placeTitle,
    placeRating,
    placeImg: {
      alternativeText: placeImgAlt,
      url: placeImgUrl,
    },
    reviewsItemButton,
    reviewsAllButton: {
      label: reviewsAllBtnLabel,
      url: reviewsAllBtnUrl,
    },
  } = DATA.allStrapiPageIndex.nodes[0];

  const reviewsList = DATA.allStrapiIndexReview.nodes;

  return (
    <div id="reviews" className="index__reviews">
      <Container as="section">
        <h2 className="reviews__title">{reviewsTitle}</h2>

        <div className="reviews__place">
          <Img src={placeImgUrl} alt={placeImgAlt} className="place" />
          <article>
            <h3 className="place__name">{placeTitle}</h3>
            <div className="place__rating">
              <p className="rating__number">{placeRating}</p>
              <ReviewsStars />
            </div>
          </article>
        </div>
      </Container>

      <Container fluid="xl">
        <div className="reviews__overflow">
          <Row as="ul" className="reviews__list">
            {reviewsList.map((reviewsItem) => (
              <Col key={reviewsItem.id} as="li" xs={11} xl={12}>
                <ReviewsItem review={reviewsItem} button={reviewsItemButton} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {reviewsAllBtnUrl && (
        <Container>
          <Button className="primary" to={reviewsAllBtnUrl} icon="arrow-right" iconOrder="order-1" label={reviewsAllBtnLabel} labelOrder="order-0" />
        </Container>
      )}
    </div>
  );
}

export default IndexReviews;
