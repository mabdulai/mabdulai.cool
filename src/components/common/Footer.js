import React, { Component } from "react";
import styled from "styled-components";
import { InnerContainer, HeroContainer } from "./CommonComponents";

const Content = styled(InnerContainer)`
  justify-content: space-between;
`;

const Quote = styled.div`
  text-transform: uppercase;
`;

const Mail = styled.a`
  color: #fff;
`;

const FooterContainer = styled(HeroContainer)`
  margin-top: 60px;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer as="footer">
        <Content>
          <Quote>© Michael Abdulai 2020</Quote>
          <Quote>
            {" "}
            <Mail href="mailto:hi@mabdulai.cool">HI@MABDULAI.COOL</Mail>
          </Quote>
        </Content>
      </FooterContainer>
    );
  }
}

export default Footer;
