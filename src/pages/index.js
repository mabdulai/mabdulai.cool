import React, { Component } from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

class Home extends Component {
  render() {
    const { path } = this.props;
    return (
      <Layout path={path}>
        <MainText>
          <strong>
            My name is Michael Abdulai, and I create software using Javascript.
          </strong>{" "}
          Currently helping artists being in control of their data at ABOSS. In
          the last 30 days, I’ve pushed 2 commits to GitHub and sent 16 tweets.
          I am reading 2 books at the moment: “The Phoenix Project” by Gene Kim
          and “Dottir” by Katrin Davidsdottir and my most played genre at the
          moment is “HipHop”.
        </MainText>
      </Layout>
    );
  }
}

export default Home;
