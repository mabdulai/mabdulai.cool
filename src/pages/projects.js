import React, { Component } from "react";
import styled from "styled-components";

import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

class Projects extends Component {
  render() {
    const { path } = this.props;

    return (
      <Layout path={path}>
        <MainText>
          <Filler>Stay tuned for fun projects in the work.</Filler>
        </MainText>
      </Layout>
    );
  }
}

export default Projects;

const Filler = styled.div`
  height: 250px;
`;
