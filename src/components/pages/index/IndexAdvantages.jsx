// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Hooks
import useWindowSize from '../../../hooks/useWindowSize';

// Components
import ListItem from './ListItem';

// HardData
// import advantagesImg1 from '../../../assets/images/pages/index/index-advantages/advantages-1.svg';
// import advantagesImg2 from '../../../assets/images/pages/index/index-advantages/advantages-2.svg';
// import advantagesImg3 from '../../../assets/images/pages/index/index-advantages/advantages-3.svg';
// import advantagesImg4 from '../../../assets/images/pages/index/index-advantages/advantages-4.svg';
// import advantagesImg5 from '../../../assets/images/pages/index/index-advantages/advantages-5.svg';
// import advantagesImg6 from '../../../assets/images/pages/index/index-advantages/advantages-6.svg';

// const ADVANTAGES_DATA = [
//   {
//     id: 0,
//     src: advantagesImg1,
//     alt: 'LEP - 500+ Выполненых проектов',
//     title: '500+ Выполненых проектов',
//   },
//   {
//     id: 1,
//     src: advantagesImg2,
//     alt: 'LEP - 500+ Довольных клиентов',
//     title: '500+ Довольных клиентов',
//   },
//   {
//     id: 2,
//     src: advantagesImg3,
//     alt: 'LEP - Наличный и безналичный способы оплаты',
//     title: 'Наличный и безналичный способы оплаты',
//   },
//   {
//     id: 3,
//     src: advantagesImg4,
//     alt: 'LEP - Профессионалы в своём деле',
//     title: 'Профессионалы в своём деле',
//   },
//   {
//     id: 4,
//     src: advantagesImg5,
//     alt: 'LEP - Кратчайшее время выполнения работ',
//     title: 'Кратчайшее время выполнения работ',
//   },
//   {
//     id: 5,
//     src: advantagesImg6,
//     alt: 'LEP - Только качественные материалы и оборудование',
//     title: 'Только качественные материалы и оборудование',
//   },
// ];

function IndexAdvantages() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          advantagesTitle
        }
      }
      allStrapiIndexAdvantage {
        nodes {
          id
          title
          img {
            alternativeText
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query);
  const { advantagesTitle } = DATA.allStrapiPageIndex.nodes[0];
  const advantagesList = DATA.allStrapiIndexAdvantage.nodes;

  // Logic
  const { screenWidth } = useWindowSize();
  const isMobile = screenWidth < 768;

  return (
    <div id="#advantages" className="index__advantages">
      <Container as="section">
        <h2 className="advantages__title">{advantagesTitle}</h2>
        <Row as="ul" className="advantages__list">
          {advantagesList.map((advantagesItem) => {
            const {
              id,
              img: { alternativeText: imgAlt, url: imgUrl },
              title
            } = advantagesItem;

            return (
              <Col key={id} as="li" xs={12} md={6} xl={4}>
                <ListItem
                  type={isMobile ? 'horizontal' : 'vertical'}
                  className="advantages"
                  src={imgUrl}
                  alt={imgAlt}
                  title={title}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default IndexAdvantages;
