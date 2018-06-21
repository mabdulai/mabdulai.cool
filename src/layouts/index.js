import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';
import { colors } from '../styles/';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fafeff;
  border: 1.2rem solid ${colors.primary};
  background-repeat: repeat;
`;

const TemplateWrapper = ({ children }) => (
  <PageWrapper>
    <Helmet title="Mabdulai.cool" />
    {children()}
  </PageWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
