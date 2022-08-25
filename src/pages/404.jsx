// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container } from 'react-bootstrap';

// Main Layout
import Main from '../components/layouts/Main';

// Components
import Img from '../components/global/Img';
import Button from '../components/global/Button';

// HardData
// import img from '../assets/images/global/error.svg';
// const DATA = {
//   img: {
//     src: img,
//     alt: 'Страница не найдена',
//   },
//   title: 'Страница не найдена',
//   subtitle: 'Попробуйте эти страницы : ',
//   links: [
//     {
//       id: 0,
//       label: 'Главная',
//       url: '/',
//     },
//     {
//       id: 1,
//       label: 'Прайслист',
//       url: '/pricelist',
//     },
//   ],
// };

function NotFoundPage() {
  // Data
  const query = graphql`
    query {
      allStrapiPageNotFound {
        nodes {
          title
          subtitle
          image {
            alternativeText
            url
          }
          links {
            id
            label
            url
            icon
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiPageNotFound.nodes[0];
  const {
    image: { alternativeText: imgAlt, url: imgUrl }, title, subtitle, links,
  } = DATA;

  return (
    <Main className="404">
      <Container>
        <Img src={imgUrl} alt={imgAlt} className="404" />
        <section className="text__404">
          <h1 className="text__title">{title}</h1>
          <h2 className="text__subtitle">{subtitle}</h2>
        </section>
        <ul className="links__404">
          {links.map((linksItem) => {
            const { id, url, label } = linksItem;

            return (
              <li className="links__item" key={id}>
                <Button className="primary" to={url} label={label} />
              </li>
            );
          })}
        </ul>
      </Container>
    </Main>
  );
}

export default NotFoundPage;
