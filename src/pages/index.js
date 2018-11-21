import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ProjectTitle from '../components/projects/ProjectTitle';
import Projects from '../components/projects/Projects';
import TravelTitle from '../components/travel/TravelTitle';
import Travels from '../components/travel/Travels';
import Header from '../components/common/header';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 4fr;
  grid-column-gap: 20px;
  grid-template-rows: 80px auto;
  grid-template-areas:
    'header header header header'
    'travel_title travels project_title projects';
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <GridContainer>
        <Header />
        <ProjectTitle />
        <Projects />
        <TravelTitle />
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
