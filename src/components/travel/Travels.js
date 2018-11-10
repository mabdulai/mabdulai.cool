import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  grid-area: travels;
  background: purple;
`;

class Travels extends Component {
  render() {
    return <Container>Travels!!</Container>;
  }
}

export default Travels;
