import React, { Component } from "react";
import styled from "styled-components";
import { InnerContainer, HeroContainer } from "./CommonComponents";
import insta from "../../assets/images/insta.svg";
import twitter from "../../assets/images/twitter.svg";
import link from "../../assets/images/link.svg";
import github from "../../assets/images/github.svg";

const NavList = styled.ul`
  display: flex;
`;

const Content = styled(InnerContainer)`
  justify-content: space-between;
`;

const Quote = styled.div`
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  color: white;
  fill: white;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;
class Nav extends Component {
  render() {
    return (
      <HeroContainer as="nav">
        <Content>
          <Quote>Digital home of Michael Abdulai</Quote>
          <NavList>
            <NavItem>
              <Img src={insta} alt="@mabdulai90" />
            </NavItem>
            <NavItem>
              <Img src={twitter} alt="@mabdulai90" />
            </NavItem>
            <NavItem>
              <Img src={link} alt="@mabdulai90" />
            </NavItem>
            <NavItem>
              <Img src={github} alt="@mabdulai90" />
            </NavItem>
          </NavList>
        </Content>
      </HeroContainer>
    );
  }
}

export default Nav;
