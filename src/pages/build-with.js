import React, { Component } from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

class Colophone extends Component {
  render() {
    const { path } = this.props;
    return (
      <Layout path={path}>
        <MainText>Colophone!</MainText>
      </Layout>
    );
  }
}

export default Colophone;
