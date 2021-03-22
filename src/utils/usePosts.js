import { useStaticQuery, graphql } from "gatsby";

const usePosts = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          group(field: frontmatter___year) {
            edges {
              node {
                excerpt(pruneLength: 280)
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  year
                  category
                  reading_time
                  img
                }
              }
            }
          }
        }
      }
    `
  );
  return posts.allMdx.group.map((group) => {
    return group.edges;
  });
};

export default usePosts;
