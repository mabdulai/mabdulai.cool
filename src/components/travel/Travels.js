import React, { Component } from 'react';
import Travel from './Travel';
import styled from 'styled-components';

const Container = styled.section`
  grid-area: travels;
`;

class Travels extends Component {
  render() {
    return (
      <Container>
        <Travel>New York</Travel>
        <Travel>Seoul</Travel>
        <Travel>Hong Kong</Travel>
      </Container>
    );
  }
}

export default Travels;
