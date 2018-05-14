import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';
import shadows from '../styles/shadows';
import LatestPosts from '../components/Posts/FeaturedPosts';
import AllPosts from '../components/Posts/AllPosts';
import ProjectPreview from '../components/Projects/ProjectPreview';
import AllProjects from '../components/Projects/AllProjects';
import Contact from '../components/Contact/';
import Header from '../components/Home/Header';
import Intro from '../components/Utility/Intro';
import BlockContainer from '../components/Utility/BlockContainer';

import overstats from '../projects/overstats.jpg';

const IndexContainer = styled.main`
  padding: 15rem 0 10rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const TextHeader = styled.div`
  font-size: 4rem;
`;

const FlexContainer = styled.div`
  display: flex;
`;


const IndexPage = ({ data }) => {
  return (
    <IndexContainer>
      <Header />
      <Intro>PROJECTS</Intro>
      <BlockContainer>
        <ProjectPreview
          title="Overstats"
          img={overstats}
          text=" A fun experiment with the overwatch API. Getting the more fun stats of your user account."
        />
      </BlockContainer>
      <BlockContainer>
        <ProjectPreview
          title="Notifications"
          img={overstats}
          text="A case study of a redesign of our new notification system."
          reverse
        />
      </BlockContainer>
      <BlockContainer>
        <Contact />
      </BlockContainer>
    </IndexContainer>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
