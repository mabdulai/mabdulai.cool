import React, { Component } from 'react';
import styled from 'styled-components';
import Project from './Project';

const Container = styled.section`
  grid-area: projects;
`;

class Projects extends Component {
  render() {
    return (
      <Container>
        <Project>Overstats</Project>
        <Project>Notification Rewrite</Project>
        <Project>Testing</Project>
        <Project>Dope</Project>
      </Container>
    );
  }
}

export default Projects;
