import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  left: 0;
  width: 100%;
  min-height: 200px;
  font-size: 15px;
  bottom: 0;
  color: #fff;
  line-height: 1.7;
  position: fixed;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px 0;
`;

const Contact = styled.div``;
const Label = styled.div`
  font-family: 'roboto mono';
  padding-bottom: 32px;
`;
const Item = styled.div`
  font-family: 'roboto mono';
`;
class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Content>
          <Contact>
            <Label> Contact </Label>
            <Item>mabdulai90@gmail.com</Item>
            <Item>+31 6 200 92 864</Item>
            <Item>T: @mabdulai90</Item>
            <Item>I: @mabdulai90</Item>
          </Contact>
        </Content>
      </FooterContainer>
    );
  }
}

export default Footer;
