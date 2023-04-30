/* eslint-disable react-hooks/exhaustive-deps */
// React
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Hooks
import useWindowSize from '../../../hooks/useWindowSize';

// Components
import Button from '../Button';
import PrimaryMenu from './PrimaryMenu';
import ContactsMenu from './ContactsMenu';
import Logo from './Logo';

function MainMenu(props) {
  const { element } = props;
  const Tag = element;

  const { screenWidth } = useWindowSize();

  const isHeader = element === 'header';
  const isTablet = screenWidth < 1200;

  const [headerIsOpened, setHeaderIsOpened] = useState(false);
  const headerRef = useRef('');

  function headerHandler() {
    setHeaderIsOpened((prev) => !prev);
  }

  useEffect(() => {
    if (isHeader) {
      if (headerIsOpened) {
        headerRef.current.style.maxHeight = `${headerRef.current.scrollHeight}px`;
      } else {
        headerRef.current.style.maxHeight = '88px';
      }
    }
  }, [headerIsOpened, screenWidth]);

  return (
    <Tag className={`site__${element}`} ref={headerRef}>
      <Container>
        <Row className="align-items-md-end align-items-xl-center">
          <Col xs={12} xl={2}>
            {isHeader && isTablet ? (
              <div className="header__handler">
                <Logo />
                <Button
                  className="primary"
                  active={headerIsOpened}
                  onClick={() => headerHandler()}
                  icon={headerIsOpened ? 'close' : 'menu'}
                  label="Меню"
                />
              </div>
            ) : (
              <Logo />
            )}
          </Col>

          <Col xs={12} md={6} xl={10}>
            <PrimaryMenu
              isHeader={isHeader}
              isTablet={isTablet}
              headerIsOpened={headerIsOpened}
              headerHandler={() => headerHandler()}
            />
          </Col>

          <Col xs={12} md={6} xl={12}>
            <ContactsMenu />
          </Col>
        </Row>
      </Container>
    </Tag>
  );
}

MainMenu.propTypes = {
  element: PropTypes.oneOf(['header', 'footer']).isRequired
};

export default MainMenu;
