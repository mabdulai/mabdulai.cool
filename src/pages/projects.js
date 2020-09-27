import React, { Component } from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

class Projects extends Component {
  render() {
    const { path } = this.props;

    return (
      <Layout path={path}>
        <MainText>Projects!</MainText>
      </Layout>
    );
  }
}

export default Projects;
