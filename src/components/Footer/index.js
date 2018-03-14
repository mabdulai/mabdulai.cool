import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 10rem;
  align-items: center;
  justify-content: center;
`;

class Footer extends Component {
  render() {
    return <FooterContainer>© Michael Abdulai 2018 • Built with 🌟 on GatsbyJS </FooterContainer>;
  }
}

export default Footer;
