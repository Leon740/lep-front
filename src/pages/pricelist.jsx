/* eslint-disable max-len */
/* eslint-disable react/no-danger */
// React
import React, { useRef, useState } from 'react';

// Data
import { graphql, useStaticQuery } from 'gatsby';

// React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '../components/global/Icon';

// Main Layout
import Main from '../components/layouts/Main';

// Components
import Img from '../components/global/Img';
import Button from '../components/global/Button';

// HardData
// import img from '../assets/images/global/error.svg';
// const DATA = {
//   table: {
//     thead: [
//       '№',
//       'Наименование работ',
//       'Ед. Изм.',
//       'Цена (грн)',
//     ],
//     tbody: [
//       {
//         number: 1,
//         name: '1-но  комн. квартира. Замена электропроводки. Минимальная цена за комплекс выполненых работ.',
//         unit: 'ед',
//         price: 'от 9000',
//       },
//       {
//         number: 2,
//         name: '2-х  комн. квартира. Замена электропроводки. Минимальная цена за комплекс выполненых работ.',
//         unit: 'ед',
//         price: 'от 11500',
//       },
//       {
//         number: 3,
//         name: '3-х  комн. квартира. Замена электропроводки. Минимальная цена за комплекс выполненых работ.',
//         unit: 'ед',
//         price: 'от 14000',
//       },
//       {
//         number: 4,
//         name: '4-х  комн. квартира. Замена электропроводки. Минимальная цена за комплекс выполненых работ.',
//         unit: 'ед',
//         price: 'от 17000',
//       },
//       {
//         number: 5,
//         name: 'Высверливание отверстий под установочную коробку (подрозетник) в гипсокартонной стене, гипсолисте.',
//         unit: 'шт',
//         price: '75',
//       },
//       {
//         number: 6,
//         name: 'Высверливание отверстий под установочную коробку (подрозетник) в кирпичной и газобетонной  стенах.',
//         unit: 'шт',
//         price: '90',
//       },
//       {
//         number: 7,
//         name: 'Высверливание отверстий под установочную коробку (подрозетник) в бетонной стене.',
//         unit: 'шт',
//         price: '120',
//       },
//       {
//         number: 8,
//         name: 'Монтаж установочной коробки (подрозетника).',
//         unit: 'шт',
//         price: '25',
//       },
//       {
//         number: 9,
//         name: 'Установка механизма розетки, выключателя, декоративной накладки с подключением.',
//         unit: 'шт',
//         price: '65',
//       },
//       {
//         number: 10,
//         name: 'Установка накладного выключателя, розетки.',
//         unit: 'шт',
//         price: '100',
//       },
//       {
//         number: 11,
//         name: 'Установка распаечной коробки в гипсокартонной стене, гипсолисте.',
//         unit: 'шт',
//         price: '150',
//       },
//       {
//         number: 12,
//         name: 'Установка и расключение  распаечной коробки в кирпичной стене.',
//         unit: 'шт',
//         price: '180',
//       },
//       {
//         number: 13,
//         name: 'Установка и расключение распаечной коробки в бетонной стене.',
//         unit: 'шт',
//         price: '250',
//       },
//       {
//         number: 14,
//         name: 'Установка и расключение накладной распаечной коробки.',
//         unit: 'шт',
//         price: '150',
//       },
//       {
//         number: 15,
//         name: 'Пай распределительной коробки.',
//         unit: 'шт',
//         price: '120',
//       },
//       {
//         number: 16,
//         name: 'Прокладка открытой проводки на скобах по кирпичной стене до 4 мм2.',
//         unit: 'м/п',
//         price: '22',
//       },
//       {
//         number: 17,
//         name: 'Прокладка открытой проводки на скобах по бетонной стене до 4 мм2.',
//         unit: 'м/п',
//         price: '22',
//       },
//       {
//         number: 18,
//         name: 'Прокладка открытой проводки в гофре до 4 мм2.',
//         unit: 'м/п',
//         price: '30',
//       },
//       {
//         number: 19,
//         name: 'Прокладка открытой проводки в ПВХ трубе до 4 мм2.',
//         unit: 'м/п',
//         price: '35',
//       },
//       {
//         number: 20,
//         name: 'Прокладка открытой проводки на скобах по кирпичной стене от 4-16 мм2.',
//         unit: 'м/п',
//         price: '28',
//       },
//       {
//         number: 21,
//         name: 'Прокладка открытой проводки на скобах по бетонной стене от 4-16 мм2.',
//         unit: 'м/п',
//         price: '28',
//       },
//       {
//         number: 22,
//         name: 'Прокладка открытой проводки на скобах по бетонной стене от 16 мм2.',
//         unit: 'м/п',
//         price: '60',
//       },
//       {
//         number: 23,
//         name: 'Прокладка открытой проводки в ПВХ трубе до 4 мм2.',
//         unit: 'м/п',
//         price: '35',
//       },
//       {
//         number: 24,
//         name: 'Прокладка короба электрического по гипсокартонной стене, гипсолисте  до 25 мм.',
//         unit: 'м/п',
//         price: '40',
//       },
//       {
//         number: 25,
//         name: 'Прокладка короба электрического по кирпичной стене до 25 мм.',
//         unit: 'м/п',
//         price: '45',
//       },
//       {
//         number: 26,
//         name: 'Прокладка короба электрического по бетонной стене до 25 мм.',
//         unit: 'м/п',
//         price: '55',
//       },
//       {
//         number: 27,
//         name: 'Штробление гипсокартонной стены или гипсолиста под провод.',
//         unit: 'м/п',
//         price: '35',
//       },
//       {
//         number: 28,
//         name: 'Штробление кирпичной стены под провод.',
//         unit: 'м/п',
//         price: '65',
//       },
//       {
//         number: 29,
//         name: 'Штробление бетонной стены под провод.',
//         unit: 'м/п',
//         price: '85',
//       },
//       {
//         number: 30,
//         name: 'Сборка электрощита до 24 групп без счетчика электроэнергии.',
//         unit: 'шт',
//         price: '1500-3000',
//       },
//       {
//         number: 31,
//         name: 'Сборка электрощита до 24 групп с 1ф счетчиком электроэнергии.',
//         unit: 'шт',
//         price: '1800-3300',
//       },
//       {
//         number: 32,
//         name: 'Сборка электрощита до 24 групп с 3ф счетчиком электроэнергии.',
//         unit: 'шт',
//         price: '2200-4000',
//       },
//       {
//         number: 33,
//         name: 'Установка и подключение 1ф счетчика электроэнергии.',
//         unit: 'шт',
//         price: '650',
//       },
//       {
//         number: 34,
//         name: 'Установка и подключение 3ф счетчика электроэнергии.',
//         unit: 'шт',
//         price: '1200',
//       },
//       {
//         number: 35,
//         name: 'Установка щита электрического накладного до 12 групп.',
//         unit: 'шт',
//         price: 'от 500',
//       },
//       {
//         number: 36,
//         name: 'Установка щита электрического внутреннего (в нишу) до 12 групп.',
//         unit: 'шт',
//         price: 'от 700',
//       },
//       {
//         number: 37,
//         name: 'Установка (замена) автоматического выключателя.',
//         unit: 'шт',
//         price: '170',
//       },
//       {
//         number: 38,
//         name: 'Установка и подключение светильника настенного, бра.',
//         unit: 'шт',
//         price: 'от 150',
//       },
//       {
//         number: 39,
//         name: 'Установка и подключение подвесного светильника, люстры с креплением к потолку.',
//         unit: 'шт',
//         price: 'от 250',
//       },
//       {
//         number: 40,
//         name: 'Сверление отверстий под установку точечного светильника гипсокартоне, гипсолисте.',
//         unit: 'шт',
//         price: '80',
//       },
//       {
//         number: 41,
//         name: 'Сверление отверстий под установку точечного светильника в реечном потолке.',
//         unit: 'шт',
//         price: '100',
//       },
//       {
//         number: 42,
//         name: 'Установка и подключение точечного, галогенного светильника (без трансформатора).',
//         unit: 'шт',
//         price: '80',
//       },
//       {
//         number: 43,
//         name: 'Установка трансформатора.',
//         unit: 'шт',
//         price: '350',
//       },
//       {
//         number: 44,
//         name: 'Установка и подключение светильника потолочного (типа Армстронг).',
//         unit: 'шт',
//         price: 'от 250',
//       },
//       {
//         number: 45,
//         name: 'Подключение стабилизатора напряжения (220В).',
//         unit: 'шт',
//         price: 'от 1000',
//       },
//       {
//         number: 46,
//         name: 'Установка датчиков движения, датчиков света.',
//         unit: 'шт',
//         price: '150',
//       },
//       {
//         number: 47,
//         name: 'Установка и подключение терморегулятора теплого пола.',
//         unit: 'шт',
//         price: '250',
//       },
//       {
//         number: 48,
//         name: 'Установка системы электрообогрева пола с укладкой термоэлементов и устройством теплоизоляции.',
//         unit: 'м2',
//         price: 'от 350',
//       },
//       {
//         number: 49,
//         name: 'Подключение электрической плиты (варочной поверхности).',
//         unit: 'шт',
//         price: 'от 400',
//       },
//       {
//         number: 50,
//         name: 'Сверление сквозных отверстий в стене диаметром до 25мм.',
//         unit: 'шт',
//         price: '40 - 80',
//       },
//       {
//         number: 51,
//         name: 'Демонтаж силового кабеля.',
//         unit: 'м/п',
//         price: '20 - 45',
//       },
//       {
//         number: 52,
//         name: 'Демонтаж электропроводки.',
//         unit: 'м/п',
//         price: '20',
//       },
//       {
//         number: 53,
//         name: 'Демонтаж светильника.',
//         unit: 'шт',
//         price: '35 - 50',
//       },
//       {
//         number: 54,
//         name: 'Демонтаж розетки и выключателя.',
//         unit: 'шт',
//         price: '25 - 45',
//       },
//       {
//         number: 55,
//         name: 'Установка звонка.',
//         unit: 'шт',
//         price: '150 - 250',
//       },
//       {
//         number: 56,
//         name: 'Установка кнопки звонка.',
//         unit: 'шт',
//         price: '50',
//       },
//       {
//         number: 57,
//         name: 'Подключение и установка вытяжного вентилятора.',
//         unit: 'шт',
//         price: 'от 200',
//       },
//       {
//         number: 58,
//         name: 'Установка домофонов.',
//         unit: 'ед',
//         price: 'от 700',
//       },
//       {
//         number: 59,
//         name: 'Установка системы видеонаблюдения.',
//         unit: 'ед',
//         price: 'от 3500',
//       },
//       {
//         number: 60,
//         name: 'Перенос электрощитов в квартиру / с квартиры.',
//         unit: 'ед',
//         price: 'от 2500',
//       },
//       {
//         number: 61,
//         name: 'Абонентское техническое обслуживание зданий, домов, офисов, квартир, торговых помещений и т. д. с заключением договора.',
//         unit: 'ед',
//         price: 'от 5600/мес',
//       },
//       {
//         number: 62,
//         name: 'Выезд в дачные посѐлки, деревенские дома. За каждый км от КП в одну сторону.',
//         unit: 'км',
//         price: '14',
//       },
//       {
//         number: 63,
//         name: 'Монтаж пролета СИП.',
//         unit: 'ед',
//         price: '800 - 1200',
//       },
//       {
//         number: 64,
//         name: 'Прокладка кабеля.',
//         unit: 'м/п',
//         price: '120 - 150',
//       },
//       {
//         number: 65,
//         name: 'Земляные работы (устройство траншеи).',
//         unit: 'м/п',
//         price: '200 - 350',
//       },
//     ],
//   },
//   notFound: {
//     img: {
//       src: img,
//       alt: 'Ничего не найдено по вашему запросу.',
//     },
//     title: 'Ничего не найдено по вашему запросу.',
//     subtitle: 'Попробуйте эти ключевые слова :',
//     buttons: [
//       {
//         id: 0,
//         label: 'Провод',
//       },
//       {
//         id: 1,
//         label: 'Монтаж',
//       },
//       {
//         id: 2,
//         label: 'Демонтаж',
//       },
//       {
//         id: 3,
//         label: 'Установка',
//       },
//       {
//         id: 4,
//         label: 'Сборка',
//       },
//       {
//         id: 5,
//         label: 'Подключение',
//       },
//       {
//         id: 6,
//         label: 'Прокладка',
//       },
//       {
//         id: 7,
//         label: 'Пай',
//       },
//       {
//         id: 8,
//         label: 'Штробление',
//       },
//       {
//         id: 9,
//         label: 'Высверливание',
//       },
//     ],
//   },
// };

function PricelistPage() {
  // Data
  const query = graphql`
    query {
      allStrapiPagePricelist {
        nodes {
          pageTitle
          inputPlaceholder
          thead {
            number
            name
            unit
            price
          }
          table {
            id
            name
            unit
            price
          }
          notFoundImage {
            alternativeText
            url
          }
          notFoundTitle
          notFoundSubtitle
          notFoundButtons {
            id
            label
          }
        }
      }
    }
  `;
  const DATA = useStaticQuery(query).allStrapiPagePricelist.nodes[0];
  const {
    pageTitle,
    inputPlaceholder,
    thead,
    table,
    notFoundImage: { alternativeText: notFoundImageAlt, url: notFoundImageUrl },
    notFoundTitle,
    notFoundSubtitle,
    notFoundButtons
  } = DATA;

  // Logic
  const [searchQuery, setSearchQuery] = useState('');

  const isSearchQuery = searchQuery.length > 1;

  function sanitizeStringFunc(string) {
    return string.trim().toLowerCase();
  }

  // scroll table to the start (left side) on search
  const tableRef = useRef(null);

  function searchFunc() {
    if (tableRef.current?.scrollLeft) {
      tableRef.current.scrollLeft = 0;
    }

    if (isSearchQuery) {
      return table.filter((tr) =>
        sanitizeStringFunc(tr.name).includes(sanitizeStringFunc(searchQuery))
      );
    }

    return table;
  }

  function notFoundButtonOnClick(label) {
    setSearchQuery(label);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Main className="pricelist">
      <div className="pricelist__inner">
        <Container as="section">
          <h1 className="pricelist__title">{pageTitle}</h1>

          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6} lg={5} xl={4}>
              <div className="pricelist__search">
                <div className="search__icon">
                  <Icon className="search" />
                </div>

                <div className="search__input">
                  <input
                    type="text"
                    className="input__inner"
                    placeholder={inputPlaceholder}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                  {isSearchQuery && (
                    <button
                      type="button"
                      className="input__reset"
                      onClick={() => setSearchQuery('')}
                    >
                      <Icon className="close" />
                    </button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid="lg">
          <div
            className={`pricelist__results ${
              searchFunc().length > 0 ? 'pricelist__results_scroll' : ''
            }`}
            ref={tableRef}
          >
            {searchFunc().length > 0 ? (
              <div className="results__table">
                <table className="table__inner">
                  <thead className="table__thead">
                    <tr className="table__tr">
                      <th className="table__th col">{thead.number}</th>
                      <th className="table__th col-8">{thead.name}</th>
                      <th className="table__th col">{thead.unit}</th>
                      <th className="table__th col-2">{thead.price}</th>
                    </tr>
                  </thead>
                  <tbody className="table__tbody">
                    {searchFunc().map((tr, index) => (
                      <tr key={tr.id} className="table__tr">
                        <td className="table__td col">{index + 1}</td>
                        <td className="table__td table__td_name col-8">
                          {isSearchQuery ? (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: sanitizeStringFunc(tr.name).replace(
                                  sanitizeStringFunc(searchQuery),
                                  `<span class='td__search'>${sanitizeStringFunc(
                                    searchQuery
                                  )}</span>`
                                )
                              }}
                            />
                          ) : (
                            tr.name
                          )}
                        </td>
                        <td className="table__td col">{tr.unit}</td>
                        <td className="table__td col-2">{tr.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="results__notfound">
                <Img src={notFoundImageUrl} alt={notFoundImageAlt} className="notfound" />
                <h2 className="notfound__title">{notFoundTitle}</h2>
                <h3 className="notfound__subtitle">{notFoundSubtitle}</h3>
                <div className="notfound__buttons">
                  {notFoundButtons.map((button) => (
                    <Button
                      key={button.id}
                      className="primary"
                      label={button.label}
                      onClick={() => notFoundButtonOnClick(button.label)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </Main>
  );
}

export default PricelistPage;
