// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container } from 'react-bootstrap';

// Components
import Img from '../../../global/Img';
import Button from '../../../global/Button';
import HeroLightning from './HeroLightning';

// HardData
// import heroBackground from '../../../../assets/images/pages/index/index-hero/hero-background.jpg';

function IndexHero() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          heroSubtitle
          heroTitle1
          heroTitle2
          heroTitleEmoji
          heroImage {
            alternativeText
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiPageIndex.nodes[0];

  const {
    heroImage: {
      alternativeText: heroImgAlt,
      url: heroImgUrl,
    },
    heroSubtitle,
    heroTitle1,
    heroTitle2,
    heroTitleEmoji,
  } = DATA;

  return (
    <div className="index__hero">
      <Img src={heroImgUrl} alt={heroImgAlt} className="hero" progressive isBackground />

      <Container className="p-0">
        <p className="hero__paragraph">{heroSubtitle}</p>

        <h1 className="hero__title">
          <HeroLightning content={heroTitleEmoji} className="d-none d-md-inline" />
          {' '}
          {heroTitle1}
          {' '}

          <br className="d-md-none" />

          <HeroLightning content={heroTitleEmoji} className="d-md-none" />
          {' '}
          {heroTitle2}
          {' '}
          <HeroLightning content={heroTitleEmoji} />
        </h1>
        <Button className="primary" to="/pricelist" label="Прайслист" />
      </Container>
    </div>
  );
}

export default IndexHero;
