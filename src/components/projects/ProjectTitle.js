import React, { Component } from 'react';
import styled from 'styled-components';
import RotatedText from '../common/RotatedText';

const Container = styled.section`
  grid-area: project_title;
  overflow: hidden;
`;

class ProjectTitle extends Component {
  render() {
    return (
      <Container>
        <RotatedText>Projects</RotatedText>
      </Container>
    );
  }
}

export default ProjectTitle;
