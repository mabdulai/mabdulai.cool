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
import notif from '../projects/notif.gif';
import { flash } from 'react-animations';

const IndexContainer = styled.main`
  padding: 15rem 0 0rem;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

const TextHeader = styled.div`
  font-size: 4rem;
`;

const FlexContainer = styled.div`
  display: flex;
`;
const SectionTitle = styled(Intro)`
  font-size: 2.5rem;
`;

const FooterContainer = styled(BlockContainer)`
  margin-bottom: 5rem;
`;

const IndexPage = ({ data }) => {
  return (
    <IndexContainer>
      <Header />
      <SectionTitle>Projects</SectionTitle>
      <BlockContainer animate>
        <ProjectPreview
          title="Overstats"
          img={overstats}
          text=" A fun experiment with the overwatch API. Getting the more fun stats of your user account."
          link="https://mabdulai.github.io/overstats"
          target="_blank"
        />
      </BlockContainer>
      <BlockContainer>
        <ProjectPreview
          title="Notifications"
          img={notif}
          text="A case study of a redesign of our new notification system."
          link="/notifications"
          reverse
        />
      </BlockContainer>
      <FooterContainer>
        <Contact />
      </FooterContainer>
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
