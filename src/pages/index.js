import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Projects from '../components/projects/Projects';
import Travels from '../components/travel/Travels';
import Intro from '../components/intro/';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 32px;
  grid-template-rows: 80px auto;
  grid-template-areas:
    'header header'
    'travels projects';
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <GridContainer>
        <Intro />
        <Projects />
        <Travels />
      </GridContainer>
    </Layout>
  );
};

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "1.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "2.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
  }
`;
