import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";
import styled from "styled-components";

class BlogPostTemplate extends React.Component {
  render() {
    const { mdx } = this.props.data;
    return (
      <Layout displayHeader={false}>
        <ArticleContent>
          <h1>{mdx.frontmatter.title}</h1>
          <p>{mdx.frontmatter.date}</p>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </ArticleContent>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;

const ArticleContent = styled.article`
  max-width: 50em;
  color: ${({ theme }) => theme.offWhite};
  h1,
  h2 {
    font-family: ${({ theme }) => theme.fontDisplay};
    margin: 40px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 40px;
  }
  p {
    font-family: ${({ theme }) => theme.fontMain};
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    opacity: 0.9;
  }
`;
