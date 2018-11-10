import React, { Component } from 'react';
import styled from 'styled-components';
import RotatedText from '../common/RotatedText';

const Container = styled.section`
  grid-area: travel_title;
  overflow: hidden;
`;

class TravelTitle extends Component {
  render() {
    return (
      <Container>
        <RotatedText>TravelTitle</RotatedText>
      </Container>
    );
  }
}

export default TravelTitle;
