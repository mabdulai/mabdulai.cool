import React, { Component } from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

class Thoughts extends Component {
  render() {
    const { data, path } = this.props;
    return (
      <Layout path={path}>
        <MainText>Thoughts!</MainText>
      </Layout>
    );
  }
}

export default Thoughts;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
