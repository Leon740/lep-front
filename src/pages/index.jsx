// React
import React from 'react';

// Main Layout
import Main from '../components/layouts/Main';

// Components
import IndexHero from '../components/pages/index/IndexHero/IndexHero';
import IndexAbout from '../components/pages/index/IndexAbout';
import IndexServices from '../components/pages/index/IndexServices';
import IndexReviews from '../components/pages/index/IndexReviews/IndexReviews';
import IndexProjects from '../components/pages/index/IndexProjects/IndexProjects';
import IndexPartners from '../components/pages/index/IndexPartners';
import IndexAdvantages from '../components/pages/index/IndexAdvantages';
import IndexFaqs from '../components/pages/index/IndexFaqs';

function IndexPage() {
  return (
    <Main className="index">
      <IndexHero />
      <IndexAbout />
      <IndexServices />
      <IndexReviews />
      <IndexProjects />
      <IndexPartners />
      <IndexAdvantages />
      <IndexFaqs />
    </Main>
  );
}

export default IndexPage;
