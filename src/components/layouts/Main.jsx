// React
import React, { StrictMode, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import Spinner from 'react-bootstrap/Spinner';
import MainMenu from '../global/MainMenu/MainMenu';

// Styles
import '../../assets/scss/master.scss';

// HardData
// import ogImage from '../../assets/images/global/og-image.jpg';
// const DATA = {
//   lang: 'ru-ru',
//   title: 'LEP - Электромонтаж - Одесса',
//   description: 'Электромонтаж в кратчайшее время в бизнес-центрах, офисных помещениях, ОСМД с безналичным и наличным способом оплаты. Работа с качественным материалом.',
//   keywords: 'Одесса, Николаев, Херсон, Электромонтаж, Электромонтажные работы, Монтаж, Электропроводка, Проводка, Щитовые, Сборка щитов, Ремонт щитов, Светильники, Люстры, Подсветки, Свет, Освещение, Розетки, Фурнитуры, Тёплый пол, Электрооборудование, НиколаевОблЭнерго.',
//   url: 'https://lep.mk.ua/',
//   image: ogImage,
// };

function Main(props) {
  const { className, children } = props;

  // Data
  const query = graphql`
    query {
      allStrapiMeta {
        nodes {
          lang
          title
          description
          keywords
          url
          image {
            localFile {
              url
            }
          }
        }
      }
      allStrapiPageNotFound {
        nodes {
          image {
            alternativeText
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiMeta.nodes[0];
  const {
    lang,
    title,
    description,
    keywords,
    url,
    image: {
      localFile: { url: image }
    }
  } = DATA;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <html lang={lang} />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <link rel="alternate" href={url} hrefLang={lang} />
          {/* OG */}
          <meta property="og:locale" content={lang} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={image} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={title} />
        </Helmet>
        <div className={`site__body ${!isMounted ? 'site__body--loading' : ''}`}>
          {isMounted ? (
            <>
              <div className="site__header_placeholder">
                <div className="site__header_container">
                  <MainMenu element="header" />
                </div>
              </div>

              <main className={`page__${className}`}>{children}</main>

              <MainMenu element="footer" />
            </>
          ) : (
            <div className="site__loader">
              <Spinner animation="border" role="status" variant="dark" />
            </div>
          )}
        </div>
      </HelmetProvider>
    </StrictMode>
  );
}

Main.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Main;
