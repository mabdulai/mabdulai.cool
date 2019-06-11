import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Footer, Header } from './';
import './global.css';
import styled, { ThemeProvider } from 'styled-components';

const GridContainer = styled.main`
  z-index: 2;
  background: #fff;
  position: relative;
  padding-bottom: 300px;

  @media screen and (max-width: 800px) {
    padding: 0 20px 20px;
  }
`;

const theme = {
  minHeight: '530px',
  maxHeight: '600px'
};

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Mabdulai.cool' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header />
          <GridContainer>{children}</GridContainer>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
