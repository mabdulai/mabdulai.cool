import React, { Component } from 'react';
import styled from 'styled-components';
import RotatedText from '../common/RotatedText';

const Container = styled.section`
  position: relative;
  grid-area: project_title;
`;

class ProjectTitle extends Component {
  render() {
    return <Container />;
  }
}

export default ProjectTitle;
