import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/common/Layout";
import styled from "styled-components";

class BlogPostTemplate extends React.Component {
  render() {
    const mdx = this.props.data.mdx;
    return (
      <Layout displayHeader={false}>
        <ContentWrapper>
          <ArticleContent>
            <TitleImage image={mdx.frontmatter.titleImage} />
            <h1>{mdx.frontmatter.title}</h1>
            <Date>READ TIME: {mdx.frontmatter.reading_time}</Date>
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
        reading_time
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

const ArticleContent = styled.article`
  color: ${({ theme }) => theme.ochre};
  padding-bottom: 100px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
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
    color: ${({ theme }) => theme.ochre};
    text-align: center;
    font-size: 100px;
    width: 960px;
    margin-bottom: 8px;

    @media (max-width: 1200px) {
      font-size: 24px;
      width: 100%;
    }
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 40px;

    @media (max-width: 1200px) {
      font-size: 30px;
      padding: 0 20px;
    }
  }
  p {
    font-family: ${({ theme }) => theme.fontBlog};
    font-weight: 400;
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
    text-align: justify;

    padding-bottom: 24px;
    max-width: 700px;

    @media (max-width: 1200px) {
      font-size: 14px;
      max-width: 100%;
      padding: 0px 20px 20px;
    }
  }
  ul {
    padding-left: 40px;
    margin: 0 0 20px;
  }
  li {
    font-family: ${({ theme }) => theme.fontMain};
    list-style-type: disc;
    padding: 8px;
    font-size: 20px;
    text-transform: none;

    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }

  > div {
    width: 960px;
    padding: 10px 60px 40px;

    @media (max-width: 1200px) {
      padding: 1px 0 0;
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;

const Date = styled.span`
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;
  color: ${({ theme }) => theme.offWhite};
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;
