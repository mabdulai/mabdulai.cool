import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const HomeLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 6rem;
  color: #222;
  padding-bottom: 2rem;
`;


const Header = () => (
  <HomeLink to="/">Mabdulai.io</HomeLink>
);

export default Header;
