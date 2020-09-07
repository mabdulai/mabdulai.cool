import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/common/Layout";

class BlogPostTemplate extends React.Component {
  render() {
    const { mdx } = this.props.data;
    return (
      <Layout displayHeader={false}>
        <article>
          <h1>{mdx.frontmatter.title}</h1>
          <p>{mdx.frontmatter.date}</p>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
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
