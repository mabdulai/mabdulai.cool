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

  @media screen and (max-width: 800px) {
    padding: 0 30px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Contact = styled.div``;
const Label = styled.div`
  font-family: 'Modern Era';
  padding: 16px 0;
`;
const Item = styled.div`
  font-family: 'Modern Era';
  padding: 2px 0;
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: #76757d;
  padding: 16px 0;
  font-family: 'Modern Era';
`;

export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Content>
          <Contact>
            <Label> Contact </Label>
            <Item>mabdulai90@gmail.com</Item>
            <Item>+31 6 200 92 864</Item>
            <Item>
              <a href="http://twitter.com/mabdulai90" target="_blank">
                T: @mabdulai90
              </a>
            </Item>
            <Item>
              <a href="http://instagram.com/mabdulai90" target="_blank">
                I: @mabdulai90
              </a>
            </Item>
          </Contact>
          <Contact>
            <Copyright>© Michael Abdulai 2019</Copyright>
          </Contact>
        </Content>
      </FooterContainer>
    );
  }
}
