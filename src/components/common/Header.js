import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  padding-left: 24px;
  top: 0;
  height: 56px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

class Header extends Component {
  render() {
    return <Container>Header!</Container>;
  }
}

export default Header;
