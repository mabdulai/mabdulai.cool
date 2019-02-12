import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  height: 100px;
  background: #fff;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  list-style-type: none;
  margin-right: 24px;
  font-family: 'Roboto Mono';
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <NavItem>
          <Link to="/">Logo</Link>
        </NavItem>
        <NavList>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/code">Code</Link>
          </NavItem>
          <NavItem>
            <Link to="/thoughts">Thoughts</Link>
          </NavItem>
          <NavItem>
            <Link to="/uses">Uses</Link>
          </NavItem>
        </NavList>
      </Container>
    );
  }
}

export default Header;
