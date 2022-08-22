// React
import React from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Row, Col } from 'react-bootstrap';

// Components
import Button from '../Button';

// HardData
// const CONTACTS_MENU_DATA = [
//   {
//     id: 0,
//     url: 'https://www.instagram.com/elektrik__nikolaev/',
//     label: 'elektrik__nikolaev',
//     icon: 'social-insta',
//   },
//   {
//     id: 1,
//     url: 'tel:0634813350',
//     label: '063 481 33 50',
//     icon: 'social-phone',
//   },
//   {
//     id: 2,
//     url: 'tel:0951434053',
//     label: '095 143 40 53',
//     icon: 'social-phone',
//   },
//   {
//     id: 3,
//     url: 'tel:0973802300',
//     label: '097 380 23 00',
//     icon: 'social-phone',
//   },
//   {
//     id: 4,
//     url: 'mailto:urklep@gmail.com',
//     label: 'urklep@gmail.com',
//     icon: 'social-gmail',
//   },
// ];

function ContactsMenu() {
  // Data
  const query = graphql`
    query {
      allStrapiElementContactsMenu {
        nodes {
          links {
            id
            url
            label
            icon
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiElementContactsMenu.nodes[0];
  const { links } = DATA;

  return (
    <div className="contacts__menu">
      <Row className="justify-content-between">
        {links.map(
          (button) => (
            <Col key={button.id} xs={12}>
              <Button
                className="circle"
                to={button.url}
                icon={button.icon}
                iconOrder="order-md-1 order-xl-0"
                label={button.label}
                labelOrder="order-md-0 order-xl-1"
              />
            </Col>
          ),
        )}
      </Row>
    </div>
  );
}

export default ContactsMenu;
