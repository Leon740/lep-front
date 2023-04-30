// React
import React, { useState } from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

// React-Markdown
import ReactMarkdown from 'react-markdown';

// HardData
// const FAQS_DATA = [
//   {
//     id: 0,
//     title: 'Нужно ли мне предоставить вам чертёж / проект перед монтажом',
//     content: 'Если он есть да, если нет мы вам поможем в этом.',
//   },
//   {
//     id: 1,
//     title: 'Как узнать приблизительную стоимость монтажа',
//     content: 'Мы делаем просчёт проекта (смету) и предоставляем вам, затем монтаж. <br /><a href="/pricelist">Смотреть прайслист</a>.',
//   },
//   {
//     id: 2,
//     title: 'Нужно ли мне предоставить вам чертёж / проект перед монтажом',
//     content: 'Если он есть да, если нет мы вам поможем в этом.',
//   },
//   {
//     id: 3,
//     title: 'Нужно ли мне предоставить вам чертёж / проект перед монтажом',
//     content: 'Если он есть да, если нет мы вам поможем в этом.',
//   },
//   {
//     id: 4,
//     title: 'Нужно ли мне предоставить вам чертёж / проект перед монтажом',
//     content: 'Если он есть да, если нет мы вам поможем в этом.',
//   },
//   {
//     id: 5,
//     title: 'Нужно ли мне предоставить вам чертёж / проект перед монтажом',
//     content: 'Если он есть да, если нет мы вам поможем в этом.',
//   },
// ];

function IndexFaqs() {
  // Data
  const query = graphql`
    query {
      allStrapiPageIndex {
        nodes {
          faqsTitle
          faqsList {
            id
            title
            content {
              data {
                content
              }
            }
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiPageIndex.nodes[0];

  const { faqsTitle, faqsList } = DATA;

  // Logic
  const [activeId, setActiveId] = useState(null);

  function accordionButtonOnClick(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <div className="index__faqs">
      <Container as="section">
        <h2 className="faqs__h2">{faqsTitle}</h2>

        <Accordion className="faqs__accordion">
          <Row as="ul" className="justify-content-center justify-content-xxl-start">
            {faqsList.map((faqsItem, index) => {
              const {
                id,
                title,
                content: {
                  data: { content }
                }
              } = faqsItem;

              return (
                <Col as="li" key={id} xs={12} lg={10} xl={8} xxl={6}>
                  <Accordion.Item
                    eventKey={index}
                    className={`accordion__item ${
                      activeId === index ? 'accordion__item--active' : ''
                    }`}
                  >
                    <div>
                      <Accordion.Button
                        onClick={() => accordionButtonOnClick(index)}
                        className="accordion__button"
                      >
                        {title}
                      </Accordion.Button>
                    </div>
                    <Accordion.Body className="accordion__body">
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              );
            })}
          </Row>
        </Accordion>
      </Container>
    </div>
  );
}

export default IndexFaqs;
