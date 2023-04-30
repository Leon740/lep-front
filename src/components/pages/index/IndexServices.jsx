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
// import servicesImg1 from '../../../assets/images/pages/index/index-services/services-1.svg';
// import servicesImg2 from '../../../assets/images/pages/index/index-services/services-2.svg';
// import servicesImg3 from '../../../assets/images/pages/index/index-services/services-3.svg';
// import servicesImg4 from '../../../assets/images/pages/index/index-services/services-4.svg';
// import servicesImg5 from '../../../assets/images/pages/index/index-services/services-5.svg';
// import servicesImg6 from '../../../assets/images/pages/index/index-services/services-6.svg';
// import servicesImg7 from '../../../assets/images/pages/index/index-services/services-7.svg';
// import servicesImg8 from '../../../assets/images/pages/index/index-services/services-8.svg';

// const SERVICES_DATA = [
//   {
//     id: 0,
//     src: servicesImg1,
//     alt: 'LEP - Сборка и ремонт квартирных щитов',
//     title: 'Сборка и ремонт квартирных щитов',
//   },
//   {
//     id: 1,
//     src: servicesImg2,
//     alt: 'LEP - Монтаж электропроводки',
//     title: 'Монтаж электропроводки',
//   },
//   {
//     id: 2,
//     src: servicesImg3,
//     alt: 'LEP - Монтаж и ремонт осветительных приборов (светильники, люстры, подсветки)',
//     title: 'Монтаж и ремонт осветительных приборов (светильники, люстры, подсветки)',
//   },
//   {
//     id: 3,
//     src: servicesImg4,
//     alt: 'LEP - Установка и ремонт фурнитуры (розеток)',
//     title: 'Установка и ремонт фурнитуры (розеток)',
//   },
//   {
//     id: 4,
//     src: servicesImg5,
//     alt: 'LEP - Установка электрического тёплого пола',
//     title: 'Установка электрического тёплого пола',
//   },
//   {
//     id: 5,
//     src: servicesImg6,
//     alt: 'LEP - Продажа электрооборудования',
//     title: 'Продажа электрооборудования',
//     url: 'https://light-electricp-roducts.prom.ua/',
//   },
//   {
//     id: 6,
//     src: servicesImg7,
//     alt: 'LEP - Сотрудничество с местными программами (например НиколаевОблЭнерго)',
//     title: 'Сотрудничество с местными программами (например НиколаевОблЭнерго)',
//   },
//   {
//     id: 7,
//     src: servicesImg8,
//     alt: 'LEP - Партнёрская программа',
//     title: 'Партнёрская программа',
//     url: '/#partners',
//   },
// ];

function IndexServices() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          servicesTitle
        }
      }
      allStrapiIndexService {
        nodes {
          id
          title
          url
          img {
            alternativeText
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query);
  const { servicesTitle } = DATA.allStrapiPageIndex.nodes[0];
  const servicesList = DATA.allStrapiIndexService.nodes;

  // Logic
  const { screenWidth } = useWindowSize();
  const isMobile = screenWidth < 768;

  return (
    <div id="services" className="index__services">
      <Container as="section">
        <h2 className="services__title">{servicesTitle}</h2>
        <Row as="ul" className="services__list">
          {servicesList.map((servicesItem) => {
            const {
              id,
              img: { alternativeText: imgAlt, url: imgUrl },
              title,
              url
            } = servicesItem;

            return (
              <Col key={id} as="li" xs={12} md={6} xl={4}>
                <ListItem
                  type={isMobile ? 'horizontal' : 'vertical'}
                  className="services"
                  src={imgUrl}
                  alt={imgAlt}
                  title={title}
                  to={url}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default IndexServices;
