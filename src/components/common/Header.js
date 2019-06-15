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
  z-index: 100;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  list-style-type: none;
  margin-right: 24px;
  font-family: 'Modern Era';
  font-size: 16px;
`;

const Logo = styled(Link)`
  font-family: 'gilroy';
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
`;

export class Header extends Component {
  render() {
    return (
      <Container>
        <NavItem>
          <Logo to="/">MA.</Logo>
        </NavItem>
        <NavList>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
        </NavList>
      </Container>
    );
  }
}
