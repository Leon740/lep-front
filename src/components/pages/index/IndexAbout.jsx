// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// React-Markdown
import ReactMarkdown from 'react-markdown';

// Components
import Img from '../../global/Img';

// HardData
// import aboutImg from '../../../assets/images/pages/index/index-about/about-img.svg';
// import locationsIcon from '../../../assets/images/pages/index/index-about/locations-icon.svg';

// const LOCATIONS_DATA = [
//   {
//     id: 0,
//     city: 'Одесса',
//     src: locationsIcon,
//     alt: 'LEP Электромонтаж в Одессе',
//   },
//   {
//     id: 1,
//     city: 'Николаев',
//     src: locationsIcon,
//     alt: 'LEP Электромонтаж в Николаеве',
//   },
//   {
//     id: 2,
//     city: 'Херсон',
//     src: locationsIcon,
//     alt: 'LEP Электромонтаж в Херсоне',
//   },
// ];
// const ABOUT_IMG_DATA = {
//   src: aboutImg,
//   alt: 'Light & Electric Products - Электромонтаж',
// };

function IndexAbout() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          aboutTitle
          aboutParagraph
          aboutLocationIcon {
            alternativeText
            localFile {
              url
            }
          }
          aboutLocationsList {
            city
            id
          }
          aboutList {
            data {
              aboutList
            }
          }
          aboutImg {
            alternativeText
            localFile {
              url
            }
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiPageIndex.nodes[0];

  const {
    aboutTitle,
    aboutParagraph,
    aboutLocationIcon: {
      alternativeText: locationIconAlt,
      localFile: {
        url: locationIconUrl,
      },
    },
    aboutLocationsList,
    aboutList: {
      data: {
        aboutList,
      },
    },
    aboutImg: {
      alternativeText: aboutImgAlt,
      localFile: {
        url: aboutImgUrl,
      },
    },
  } = DATA;

  return (
    <div id="about" className="index__about">
      <Container as="section">
        <h2 className="about__title">{aboutTitle}</h2>

        <Row className="justify-content-center">
          <Col xs={12} lg={9} xl={8}>
            <Row className="align-items-center justify-content-center justify-content-md-between">

              <Col xs={12} md={6} xl={6}>
                <p>{aboutParagraph}</p>

                <div className="about__locations">
                  {aboutLocationsList.map((locationsItem) => (
                    <div key={locationsItem.id} className="locations__item">
                      <Img src={locationIconUrl} alt={locationIconAlt} className="locations" />
                      <span>{locationsItem.city}</span>
                    </div>
                  ))}
                </div>

                <div className="about__list">
                  <ReactMarkdown>{aboutList}</ReactMarkdown>
                </div>
              </Col>

              <Col xs={6} md={4}>
                <Img src={aboutImgUrl} alt={aboutImgAlt} className="about" />
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IndexAbout;
