import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import BlogPosts from '../components/BlogPosts';

const Bio = styled.div`
  display: flex;
  line-height: 2.6rem;
  padding-bottom: 3rem;
  font-weight: 600;
`;

const Contact = styled.div`
  display: flex;
`;

const Projects = styled.div``;

const Social = styled.ul``;

const SocialItem = styled.li``;

const IndexContainer = styled.div`
  width: 400px;
`;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(node => node);

  return (
    <IndexContainer>
      <Bio>
        I'm Michael Abdulai, a Frontend Developer from The Netherlands. <br />
        Currently kicking ass @ ABOSS in Amsterdam. <br />
        With a passion for design, gaming and mechanical keyboards.
      </Bio>
      <Contact>
        Get in contact with me <br />
        hello@mabdulai.io
      </Contact>
      <BlogPosts posts={posts} />
      <Social>
        <SocialItem>Facebook</SocialItem>
        <SocialItem>Twitter</SocialItem>
        <SocialItem>Github</SocialItem>
        <SocialItem>LinkedIn</SocialItem>
      </Social>
      <Link to="/page-2/">Go to page 2</Link>
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
