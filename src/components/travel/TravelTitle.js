import React, { Component } from 'react';
import styled from 'styled-components';
import RotatedText from '../common/RotatedText';

const Container = styled.section`
  position: relative;
  grid-area: travel_title;
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
