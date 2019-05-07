import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './common/Header';
import Footer from './common/Footer';
import './global.css';
import styled from 'styled-components';

const GridContainer = styled.main`
  z-index: 2;
  background: #fff;
  position: relative;
  padding-bottom: 300px;
`;

const Layout = ({ children }) => (
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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Mabdulai.cool' }, { name: 'keywords', content: 'sample, something' }]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <GridContainer>{children}</GridContainer>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
