import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  grid-area: header;
  max-height: 80px;
`;

class Header extends Component {
  render() {
    return <Container>Header!</Container>;
  }
}

export default Header;
