import React from 'react';
import { Fragment } from 'react-dom';
import Link from 'gatsby-link';

import styled from 'styled-components';

const HomeLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 6rem;
  color: #222;
  font-family: Nunito;
`;

const HeaderContainer = styled.header`
  padding: 4rem 0;
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Header = () => (
  <HeaderContainer>
    <HomeLink to="/">Mabdulai.io</HomeLink>
  </HeaderContainer>
);
export default Header;
