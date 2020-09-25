import React, { Component } from "react";
import Layout from "../components/common/Layout";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <Layout>
        <MainText>Thoughts!</MainText>
      </Layout>
    );
  }
}

export default Home;

const MainText = styled.div`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontMain};
  font-weight: light;
  letter-spacing: 0.22px;
  line-height: 1.8;
  color: ${({ theme }) => theme.offWhite};
  margin: 60px 0;
  max-width: 100%;
  padding: 0 0 200px;
`;
