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
  @media (max-width: 1200px) {
    font-size: 200px;
  }
  @media (max-width: 750px) {
    font-size: 150px;
  }
  @media (max-width: 600px) {
    -webkit-text-stroke: 1px ${({ theme }) => theme.ochre};

    font-size: 120px;
  }
`;
const Full = styled.div`
  color: #fff;
`;

const Border = styled.div`
  color: transparent;
`;
