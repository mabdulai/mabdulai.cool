import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";
import usePosts from "../utils/usePosts";

const Thoughts = ({ data, path }) => {
  const posts = usePosts();
  console.log(posts);
  return (
    <Layout path={path}>
      <MainText>
        <Year>
          <YearNumber>2020</YearNumber>
          <Posts>
            {posts.map((post) => (
              <PostLink key={post.node.fields.slug} to={post.node.fields.slug}>
                {post.node.frontmatter.title}
              </PostLink>
            ))}
          </Posts>
        </Year>
      </MainText>
    </Layout>
  );
};

export default Thoughts;

const Year = styled.div``;

const YearNumber = styled.div`
  font-size: 64px;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: bold;
`;

const Posts = styled.div``;

const PostLink = styled(Link)`
  color: currentColor;
`;
