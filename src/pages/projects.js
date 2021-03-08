import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
class Projects extends Component {
  render() {
    const { path } = this.props;

    return (
      <Layout path={path}>
        <Filler>
          <Full>CURRENTLY</Full>
          <Border>IN THE LAB</Border>
        </Filler>
      </Layout>
    );
  }
}

export default Projects;

const Filler = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 150px 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 300px;
  line-height: 0.75;
  font-weight: 900;
  -webkit-text-stroke: 2px ${({ theme }) => theme.ochre};
`;
const Full = styled.div`
  color: #fff;
`;

const Border = styled.div`
  color: transparent;
`;
