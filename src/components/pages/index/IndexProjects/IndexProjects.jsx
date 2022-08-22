// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Components
import ProjectsItem from './ProjectsItem';

// Harddata
// import projectsImg1 from '../../../../assets/images/pages/index/index-projects/projects-img-1.webp';
// import projectsImg2 from '../../../../assets/images/pages/index/index-projects/projects-img-2.webp';
// import projectsImg3 from '../../../../assets/images/pages/index/index-projects/projects-img-3.webp';
// import projectsImg4 from '../../../../assets/images/pages/index/index-projects/projects-img-4.webp';
// import projectsImg5 from '../../../../assets/images/pages/index/index-projects/projects-img-5.webp';

// const PROJECTS_DATA = [
//   {
//     id: 0,
//     title: 'Электромонтаж',
//     features: [
//       {
//         id: 0,
//         content: 'Монтаж 20 подрозетников',
//       },
//       {
//         id: 1,
//         content: 'Сборка щита',
//       },
//       {
//         id: 2,
//         content: 'Монтаж тёплого пола',
//       },
//     ],
//     photos: [
//       {
//         id: 0,
//         src: projectsImg1,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Монтаж 20 подрозетников',
//       },
//       {
//         id: 1,
//         src: projectsImg2,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Сборка щита',
//       },
//       {
//         id: 2,
//         src: projectsImg3,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Монтаж тёплого пола',
//       },
//       {
//         id: 3,
//         src: projectsImg4,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Сборка щита',
//       },
//       {
//         id: 4,
//         src: projectsImg5,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Монтаж 20 подрозетников',
//       },
//     ],
//   },
//   {
//     id: 1,
//     title: 'Электромонтаж',
//     features: [
//       {
//         id: 0,
//         content: 'Монтаж 20 подрозетников',
//       },
//       {
//         id: 1,
//         content: 'Сборка щита',
//       },
//     ],
//     photos: [
//       {
//         id: 0,
//         src: projectsImg4,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Монтаж 20 подрозетников',
//       },
//       {
//         id: 1,
//         src: projectsImg5,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Сборка щита',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Электромонтаж',
//     features: [
//       {
//         id: 2,
//         content: 'Монтаж тёплого пола',
//       },
//     ],
//     photos: [
//       {
//         id: 0,
//         src: projectsImg5,
//         alt: 'LEP Электромонтаж - фото проекта',
//         caption: 'Монтаж тёплого пола',
//       },
//     ],
//   },
// ];

function IndexProjects() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          projectsTitle
          projectsItemButton {
            label
            icon
          }
        }
      }
      allStrapiIndexProject {
        nodes {
          id
          name
          features {
            data {
              features
            }
          }
          photos {
            id
            caption
            alternativeText
            localFile {
              url
            }
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query);

  const {
    projectsTitle,
    projectsItemButton,
  } = DATA.allStrapiPageIndex.nodes[0];

  const projectsList = DATA.allStrapiIndexProject.nodes;

  return (
    <div id="projects" className="index__projects">
      <Container as="section">
        <h2 className="projects__title">{projectsTitle}</h2>
      </Container>

      <Container fluid="xl">
        <div className="projects__overflow">
          <Row as="ul" className="projects__list">
            {projectsList.map((projectsItem) => (
              <Col key={projectsItem.id} as="li" xs={11} sm={7} lg={4}>
                <ProjectsItem project={projectsItem} button={projectsItemButton} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default IndexProjects;
