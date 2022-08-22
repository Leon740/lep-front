// React
import React from 'react';
import PropTypes from 'prop-types';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Row, Col } from 'react-bootstrap';

// Components
import Button from '../Button';

// HardData
// const PRIMARY_MENU_DATA = [
//   {
//     id: 0,
//     url: '/#about',
//     label: 'О нас',
//   },
//   {
//     id: 1,
//     url: '/#services',
//     label: 'Услуги',
//   },
//   {
//     id: 2,
//     url: '/#reviews',
//     label: 'Отзывы',
//   },
//   {
//     id: 3,
//     url: '/#projects',
//     label: 'Проекты',
//   },
//   {
//     id: 4,
//     url: '/pricelist',
//     label: 'Прайслист',
//   },
//   {
//     id: 5,
//     url: 'https://light-electricp-roducts.prom.ua/',
//     label: 'Электрооборудование',
//   },
// ];

function PrimaryMenu(props) {
  const {
    isHeader, isTablet, headerIsOpened, headerHandler,
  } = props;

  // Data
  const query = graphql`
    query {
      allStrapiElementPrimaryMenu {
        nodes {
          links {
            id
            label
            url
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiElementPrimaryMenu.nodes[0];
  const { links } = DATA;

  return (
    <div className="primary__menu">
      <Row className="justify-content-xl-between align-items-xl-center">
        {links.map(
          (button) => (
            <Col key={button.id} xs={12}>
              {isHeader && isTablet ? (
                <Button className="secondary" to={button.url} label={button.label} onClick={headerHandler} />
              ) : (
                <Button className="secondary" to={button.url} label={button.label} />
              )}
            </Col>
          ),
        )}

        {isHeader && !isTablet && (
          <Col xs={12}>
            <Button className="primary" active={headerIsOpened} onClick={headerHandler} icon={headerIsOpened ? 'close' : ''} label="Контакты" />
          </Col>
        )}
      </Row>
    </div>
  );
}

PrimaryMenu.propTypes = {
  isHeader: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  headerIsOpened: PropTypes.bool.isRequired,
  headerHandler: PropTypes.func.isRequired,
};

export default PrimaryMenu;
