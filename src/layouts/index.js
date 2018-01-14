import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import './index.css';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  border: 10px solid #7166ff;
  padding: 20px;
`;

const TemplateWrapper = ({ children }) => (
  <PageWrapper>
    <Helmet
      title="Mabdulai.io"
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />
    <Header />
    <div>{children()}</div>
  </PageWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
