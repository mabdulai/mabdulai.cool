import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';
import shadows from '../styles/shadows';
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
  padding: 2rem 0 10rem;
  line-height: 3.2rem;
  font-size: 2rem;
  max-width: 50rem;
  transform: translateX(5rem);
`;

const Cutebar = styled.div`
  display: flex;
  width: 60rem;
  height: 1rem;
  background: ${colors.primary};
  justify-self: flex-end;
  transform: translateX(10rem);
`;

const BlockContainer = styled.div`
  padding: 0;
  margin: 1rem 0 8rem;
`;

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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55rem;
  margin: 0 auto;
`;

const InlineLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  height: 1.5rem;
  max-width: 7rem;
  flex: 0;
  flex-wrap: nowrap;
  align-items: flex-end;
  color: #222;
  transition: 150ms ease-in-out;

  &:hover {
    background: ${colors.succes};
  }
`;

const calcOffSet = () => {};

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(node => node);

  return (
    <IndexContainer>
      <Header>
        <Intro>Hi!👋 I'm Michael Abdulai, a Frontend Developer from The Netherlands.</Intro>
        <div>
          <Cutebar />
        </div>
        <SubIntro>
          Currently kicking ass @{' '}
          <InlineLink href="http://www.a-boss.net" target="_blank">
            <div>ABOSS</div>
          </InlineLink>{' '}
          in Amsterdam. with a passion for Javascript, design and mechanical keyboards.
        </SubIntro>
      </Header>
      <Intro>Projects</Intro>
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
