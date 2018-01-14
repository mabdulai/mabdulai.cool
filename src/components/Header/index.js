import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const HomeLink = styled(Link)`
  color: green;
  text-decoration: none;
`;

const Header = () => (
  <div>
    <HomeLink to="/">Mabdulai.io</HomeLink>
  </div>
);

export default Header;
