import React, { Fragment } from "react";
import styled from "styled-components";
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
              <div>{post.node.frontmatter.title}</div>
            ))}
          </Posts>
        </Year>
      </MainText>
    </Layout>
  );
};

export default Thoughts;

const Year = styled.div``;

const YearNumber = styled.div``;

const Posts = styled.div``;
