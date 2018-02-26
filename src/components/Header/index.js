import React from 'react';
import { Fragment } from 'react-dom';
import Link from 'gatsby-link';

import styled from 'styled-components';

const HomeLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 6rem;
  color: #222;
  padding: 8rem 5rem;
`;

const Header = () => <HomeLink to="/">Mabdulai.io</HomeLink>;
export default Header;
