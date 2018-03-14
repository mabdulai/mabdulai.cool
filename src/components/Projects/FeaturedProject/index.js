import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 25rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #fafafa;
`;

class FeaturedProject extends Component {
  render() {
    return <Container>This is a Featured Project Son</Container>;
  }
}

export default FeaturedProject;
