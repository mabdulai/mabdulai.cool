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

const Quote = styled.a`
  color: #fff;
  text-decoration: none;
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
          <Quote href="/">Digital home of Michael Abdulai</Quote>
          <NavList>
            <NavItem>
              <a href="http://www.instagram.com/mabdulai90">
                <Img src={insta} alt="Instagram" />
              </a>
            </NavItem>
            <NavItem>
              <a href="http://www.twitter.com/mabdulai90">
                <Img src={twitter} alt="Twitter" />
              </a>
            </NavItem>
            <NavItem>
              <a href="http://www.linkedin.com/michaelabdulai">
                <Img src={link} alt="LinkedIn" />
              </a>
            </NavItem>
            <NavItem>
              <a href="http://www.github.com/mabdulai">
                <Img src={github} alt="Github" />
              </a>
            </NavItem>
          </NavList>
        </Content>
      </HeroContainer>
    );
  }
}

export default Nav;
