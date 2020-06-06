import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Nav from "../components/common/Nav";
import Layout from "../components/common/Layout";
import SEO from "../components/common/seo";

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props);
    const post = this.props.data.mdx;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout displayHeader={false}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <MDXRenderer>{post.body}</MDXRenderer>
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
