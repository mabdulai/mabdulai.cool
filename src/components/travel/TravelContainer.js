import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;
class TravelContainer extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default TravelContainer;
