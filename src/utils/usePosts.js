import { useStaticQuery, graphql } from "gatsby";

const usePosts = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt(pruneLength: 280)
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
    `
  );
  return posts.allMdx.edges;
};

export default usePosts;
