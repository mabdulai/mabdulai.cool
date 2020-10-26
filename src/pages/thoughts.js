import React from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";
import usePosts from "../utils/usePosts";

const Thoughts = ({ data, path }) => {
  const posts = usePosts();
  console.log({ posts });
  return (
    <Layout path={path}>
      <MainText>Thoughts!</MainText>
    </Layout>
  );
};

export default Thoughts;
