import React from "react";
import styled from "styled-components";

import Layout from "../components/common/Layout";
import Post from "../components/post-item";
import usePosts from "../utils/usePosts";

const Thoughts = ({ path }) => {
  const postsPerYear = usePosts();

  return (
    <Layout path={path}>
      {postsPerYear.map((year, index) => (
        <YearGroup key={index}>
          <YearNumber>‘ {year[0].node.frontmatter.year.slice(2, 4)}</YearNumber>
          <PostsBlock>
            {year.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </PostsBlock>
        </YearGroup>
      ))}
      <Year></Year>
    </Layout>
  );
};

export default Thoughts;

const Year = styled.div``;

const YearNumber = styled.div`
  display: flex;
  align-items: flex-start;
  color: #fff;
  font-size: 140px;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: bold;
  line-height: 0.8;
  width: 200px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
    font-size: 100px;
  }
`;

const YearGroup = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 1px;
  font-family: ${({ theme }) => theme.fontMain};
  margin-top: 80px;
  &:not(:last-child) {
    margin-bottom: 140px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const PostsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.ochre};
  z-index: 2;

  @media (max-width: 1200px) {
    max-width: 80%;
    border: 1px solid transparent};

  }
`;
