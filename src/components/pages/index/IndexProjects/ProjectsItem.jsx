/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
// React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// React-Markdown
import ReactMarkdown from 'react-markdown';

// Components
import Button from '../../../global/Button';
import ProjectsItemDecorator from './ProjectsItemDecorator';
import ProjectsItemModal from './ProjectsItemModal';

// HardData
// import projectsItemDecoratorImg from '../../../../assets/images/pages/index/index-projects/projects-item-decorator.svg';

// const PROJECTS_ITEM_DECORATOR = {
//   src: projectsItemDecoratorImg,
//   alt: 'LEP электромонтаж',
// };

function ProjectsItem(props) {
  // Data
  const { project, button } = props;

  const {
    name,
    features: {
      data: { features }
    },
    photos
  } = project;

  const { label: btnLabel = 'Смотреть фото', icon: btnIcon = 'camera' } = button;

  // Logic
  const [modal, setModal] = useState(false);

  return (
    <div className="projects__item">
      <section>
        <h3 className="item__name">{name}</h3>
        <div className="item__features">
          <ReactMarkdown>{features}</ReactMarkdown>
        </div>
      </section>
      <Button className="circle" icon={btnIcon} label={btnLabel} onClick={() => setModal(true)} />
      {/* <Img src={PROJECTS_ITEM_DECORATOR.src} alt={PROJECTS_ITEM_DECORATOR.alt} className="decorator" /> */}
      <ProjectsItemDecorator />
      <ProjectsItemModal modal={modal} onHide={() => setModal(false)} photos={photos} />
    </div>
  );
}

ProjectsItem.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    features: PropTypes.shape({
      data: PropTypes.shape({
        features: PropTypes.string.isRequired
      })
    }),
    photos: PropTypes.array.isRequired
  }),
  button: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string
  })
};

export default ProjectsItem;
