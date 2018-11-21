import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-bottom: 50px;
  overflow: hidden;
  border: 1px solid #aaa;
  border-radius: 4px;
`;

const TravelDescription = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  background: linear-gradient(
    to bottom,
    rgba(33, 36, 37, 0) 0%,
    rgba(33, 36, 37, 0.7) 50%,
    rgba(33, 36, 37, 0.84) 100%
  );
`;

const TravelImage = styled.img`
  object-fit: cover;
  max-width: 600px;
`;

class Travel extends Component {
  render() {
    return (
      <Container>
        <TravelImage src={this.props.thumb} alt="" />
        <TravelDescription>Title: {this.props.title}</TravelDescription>
      </Container>
    );
  }
}

export default Travel;
