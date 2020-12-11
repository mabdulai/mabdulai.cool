import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";
import styled from "styled-components";

class BlogPostTemplate extends React.Component {
  render() {
    const mdx = this.props.data.mdx;
    return (
      <Layout displayHeader={false}>
        <ContentWrapper>
          <ArticleContent>
            <h1>{mdx.frontmatter.title}</h1>
            <Date>{mdx.frontmatter.date}</Date>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </ArticleContent>
        </ContentWrapper>
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Date = styled.p`
  text-align: center !important;
  margin-top: -30px;
`;

const ArticleContent = styled.article`
  color: ${({ theme }) => theme.offWhite};
  padding-bottom: 100px;
  h1,
  h2,
  h3,
  ul {
    font-family: ${({ theme }) => theme.fontDisplay};
    margin: 40px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  h1 {
    text-align: center;
    font-size: 60px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 40px;
  }
  p {
    font-family: ${({ theme }) => theme.fontMain};
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    opacity: 0.9;
    padding-bottom: 16px;
    max-width: 100ch;
  }
  ul {
    padding-left: 40px;
  }
  li {
    list-style-type: disc;
    padding: 8px;
  }

  div {
    background: rgba(136, 136, 136, 0.1);
    border-radius: 8px;
    width: 120ch;
    padding: 10px 60px 40px;
  }
`;
