import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../styles/colors';

import BlogPosts from '../components/BlogPosts';

const Intro = styled.div`
  display: flex;
  line-height: 5rem;
  padding: 0 5rem;
  font-size: 3rem;
  font-weight: 600;
`;

const SubIntro = styled.div`
  padding: 2rem 5rem 10rem;
  line-height: 2em;
  font-family: Merriweather;
`;

const Cutebar = styled.div`
  width: 30rem;
  height: 1rem;
  border-radius: 4px;
  background: ${colors.primary};
  margin-left: 5rem;
`;

const Contact = styled.div`
  display: flex;
`;

const Projects = styled.div``;

const Social = styled.ul``;

const SocialItem = styled.li``;

const IndexContainer = styled.div``;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(node => node);

  return (
    <IndexContainer>
      <Intro>
        Hi! I'm Michael Abdulai, <br /> a Frontend Developer from The Netherlands.
      </Intro>
      <Cutebar />
      <SubIntro>
        Currently kicking ass @ ABOSS in Amsterdam. With a passion for design, gaming and mechanical keyboards.
      </SubIntro>
      <BlogPosts posts={posts} />
      <Social>
        <SocialItem>Facebook</SocialItem>
        <SocialItem>Twitter</SocialItem>
        <SocialItem>Github</SocialItem>
        <SocialItem>LinkedIn</SocialItem>
      </Social>
      <Contact>
        Get in contact with me <br />
        hello@mabdulai.io
      </Contact>
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
