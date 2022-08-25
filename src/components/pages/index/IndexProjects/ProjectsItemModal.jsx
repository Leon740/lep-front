// React
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// React-Bootstrap
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

// React Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';

// Components
import Img from '../../../global/Img';
import Icon from '../../../global/Icon';

function ProjectsItemModal(props) {
  const {
    modal,
    onHide,
    photos,
  } = props;

  const swiperRef = useRef(null);

  return (
    <Modal fullscreen show={modal} onHide={() => onHide()} dialogClassName="projects__modal" contentClassName="modal__content" backdrop={false}>
      <Modal.Body className="modal__body">
        <Container className="modal__inner">
          <button type="button" aria-label="close modal" className="modal__close" onClick={() => onHide()}>
            <Icon className="close" />
          </button>

          <div className="swiper__container">
            <Swiper
              ref={swiperRef}
              wrapperTag="ul"
              autoplay={false}
              grabCursor
              loop
              autoHeight
              effect="fade"
              navigation={{
                prevEl: '.navigation__btn_prev',
                nextEl: '.navigation__btn_next',
              }}
              pagination={{
                el: '.navigation__counter',
                type: 'fraction',
              }}
              modules={[EffectFade, Navigation, Pagination]}
            >
              {photos.map((photosItem) => {
                const {
                  id, caption, alternativeText: imgAlt, url: imgUrl,
                } = photosItem;
                return (
                  <SwiperSlide key={id} tag="li">
                    <Img src={imgUrl} alt={imgAlt} className="slide" />
                    <h3 className="slide__caption">{caption}</h3>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="swiper__navigation">
            <button type="button" className="navigation__btn navigation__btn_prev" aria-label="go to previous slide">
              <Icon className="arrow-left" />
            </button>

            <div className="navigation__counter" />

            <button type="button" className="navigation__btn navigation__btn_next" aria-label="go to next slide">
              <Icon className="arrow-right" />
            </button>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

ProjectsItemModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  photos: PropTypes.array.isRequired,
};

export default ProjectsItemModal;
