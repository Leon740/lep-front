// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// HardData
// import logo from '../../../assets/images/global/logo.svg';
// const LOGO_DATA = {
//   src: logo,
//   alt: 'Light & Electric Products - company logo',
// };

function Logo() {
  // Data
  const query = graphql`
    query {
      allStrapiElementPrimaryMenu {
        nodes {
          logo {
            alternativeText
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiElementPrimaryMenu.nodes[0];
  const { logo: { alternativeText, url } } = DATA;

  return (
    <div className="site__logo">
      <a href="/" aria-label="link to homepage" className="logo__button">
        <img className="logo__img" src={url} alt={alternativeText} />
      </a>
    </div>
  );
}

export default Logo;
