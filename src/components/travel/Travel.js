import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin-bottom: 50px;
`;


class Travel extends Component {
  render() {
    return (
      <Container>
        <img src="https://via.placeholder.com/600x300" alt=""/>
        Title: {this.props.children}
      </Container>
    );
  }
}

export default Travel;