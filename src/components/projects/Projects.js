import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  grid-area: projects;
  background: green;
`;

class Projects extends Component {
  render() {
    return (
      <Container>
        <div>Hey</div>
        <div>Dit</div>
        <div>Is</div>
        <div>Dope</div>
      </Container>
    );
  }
}

export default Projects;
