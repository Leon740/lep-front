// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// Components
import Img from '../../../global/Img';

function ProjectsItemDecorator() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          projectsItemDecorator {
            alternativeText
            localFile {
              url
            }
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiPageIndex.nodes[0].projectsItemDecorator;

  const {
    alternativeText,
    localFile: {
      url,
    },
  } = DATA;

  return (
    <Img src={url} alt={alternativeText} className="decorator" />
  );
}

export default ProjectsItemDecorator;
