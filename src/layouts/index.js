import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import './index.css';
import colors from '../styles/colors';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding: 8rem 15rem;
  border: 15px solid ${colors.primary};
  background: #fff;
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
