import React, { Component } from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

class Uses extends Component {
  render() {
    const { path } = this.props;
    return (
      <Layout path={path}>
        <MainText>Uses!</MainText>
      </Layout>
    );
  }
}

export default Uses;
