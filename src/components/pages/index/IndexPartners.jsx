// React
import React from 'react';
import PropTypes from 'prop-types';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Components
import ListItem from './ListItem';

// Harddata
// import partnersImg1 from '../../../assets/images/pages/index/index-partners/partners-1.svg';
// import partnersImg2 from '../../../assets/images/pages/index/index-partners/partners-2.svg';
// import partnersImg3 from '../../../assets/images/pages/index/index-partners/partners-3.svg';
// import partnersImg4 from '../../../assets/images/pages/index/index-partners/partners-4.svg';

// const PARTNERS_DATA = [
//   {
//     id: 0,
//     sectionTitle: 'Идеально подходит для тех, кто:',
//     list: [
//       {
//         id: 0,
//         img: partnersImg1,
//         title: 'Индивидуальный предприниматель',
//         paragraph: 'Пример: вы занимаетесь квартирными ремонтами, а мы будем делать электропроводку.',
//       },
//       {
//         id: 1,
//         img: partnersImg2,
//         title: 'Компания',
//         paragraph: 'Пример: вы оператор сотовой связи, а мы будем обслуживать ваши вышки.',
//       },
//     ],
//   },
//   {
//     id: 1,
//     sectionTitle: 'Преимущества партнёрской программы',
//     list: [
//       {
//         id: 0,
//         img: partnersImg3,
//         title: 'Обслуживание вне очереди',
//       },
//       {
//         id: 1,
//         img: partnersImg4,
//         title: 'Система скидок',
//       },
//     ],
//   },
// ];

function ArticlesItem(props) {
  const { articleTitle, articleList } = props;

  return (
    <article className="partners__group">
      <h3 className="group__subtitle">{articleTitle}</h3>

      <Row as="ul">
        {articleList.map((partnersItem) => {
          const {
            id, title, paragraph, img: { alternativeText, url },
          } = partnersItem;

          return (
            <Col key={id} as="li" xs={12} md={6}>
              <ListItem type="horizontal" className="partners" src={url} alt={alternativeText} title={title} paragraph={paragraph} />
            </Col>
          );
        })}
      </Row>
    </article>
  );
}

ArticlesItem.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  articleList: PropTypes.array.isRequired,
};

function IndexPartners() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          partnersTitle
          partnersSubtitle1
          partnersSubtitle2
        }
      }
      allStrapiIndexPartner {
        nodes {
          id
          title
          paragraph
          img {
            alternativeText
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query);

  const {
    partnersTitle,
    partnersSubtitle1,
    partnersSubtitle2,
  } = DATA.allStrapiPageIndex.nodes[0];

  const partnersList = DATA.allStrapiIndexPartner.nodes;

  return (
    <div id="partners" className="index__partners">
      <Container as="section">
        <h2 className="partners__title">{partnersTitle}</h2>
        <ArticlesItem articleTitle={partnersSubtitle1} articleList={partnersList.slice(0, 2)} />
        <ArticlesItem articleTitle={partnersSubtitle2} articleList={partnersList.slice(2, 4)} />
      </Container>
    </div>
  );
}

export default IndexPartners;
