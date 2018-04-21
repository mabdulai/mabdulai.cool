import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';
import shadows from '../styles/shadows';

import Header from '../components/Header';
import LatestPosts from '../components/Posts/FeaturedPosts';
import AllPosts from '../components/Posts/AllPosts';
import FeaturedProject from '../components/Projects/FeaturedProject';
import AllProjects from '../components/Projects/AllProjects';
import Contact from '../components/Contact/';

const Intro = styled.div`
  display: flex;
  line-height: 5rem;
  padding: 0 0 2rem;
  font-size: 4rem;
  font-weight: 600;
`;

const SubIntro = styled.div`
  padding: 2rem 0 5rem;
  line-height: 3rem;
  font-size: 2rem;
  font-weight: 700;
`;

const Cutebar = styled.div`
  width: 60rem;
  height: 1rem;
  border-radius: 4px;
  background: ${colors.primary};
`;

const BlockContainer = styled.div`
  padding: 0;
  margin: 1rem 0 3rem;
  border-radius: 4px;
  background: #fff;
  box-shadow: ${shadows.mainShadow};
`;

const IndexContainer = styled.main`
  padding: 5rem 20rem 0;
  background-image: url('https://uploads-ssl.webflow.com/58da70ea373f4eae11a376f7/590103995825ce6d0ed48f02_bg-pattern.svg');
  background-repeat: repeat-y;
`;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(node => node);

  return (
    <IndexContainer>
      <Intro>Hi!👋 I'm Michael Abdulai, a Frontend Developer from The Netherlands.</Intro>
      <Cutebar />
      <SubIntro>
        Currently kicking ass @ ABOSS in Amsterdam. with a passion for Javascript, design and mechanical keyboards.
        <br />
        Welcome to my personal playground. Feel free to check out some of my personal projects and experiments.
      </SubIntro>
      <BlockContainer>
        <FeaturedProject />
      </BlockContainer>
      <BlockContainer>
        <AllProjects />
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
