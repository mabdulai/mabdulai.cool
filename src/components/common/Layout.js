import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";
import Logo from "./logo";
import theme from "../../style/theme";
import GlobalStyle from "../../style/global";
class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle whiteColor />
        <Helmet></Helmet>
        <Container>
          <Header>
            <Nav>
              <Logo />
              <NavList>
                <NavItem>Home</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>Thoughts</NavItem>
              </NavList>
            </Nav>
          </Header>

          <Main>
            <HeaderLogo>
              Mabdulai <br />{" "}
              <SubHeaderLogo>FRONTEND - DESIGN - PRODUCTIVITY</SubHeaderLogo>
            </HeaderLogo>
            <MainText>
              <strong>
                My name is Michael Abdulai, and I create software using
                Javascript.
              </strong>{" "}
              Currently helping artists being in control of their data at ABOSS.
              In the last 30 days, I’ve pushed 2 commits to GitHub and sent 16
              tweets. I am reading 2 books at the moment: “The Phoenix Project”
              by Gene Kim and “Dottir” by Katrin Davidsdottir and my most played
              genre at the moment is “HipHop”.
            </MainText>
          </Main>
          <Footer>bla</Footer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 24px solid ${({ theme }) => theme.ochre};
  background: ${({ theme }) => theme.black};
  padding: 70px 160px 50px;
  color: ${({ theme }) => theme.ochre};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${({ theme }) => theme.black};
  padding: 0 160px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.ochre};
  color: ${({ theme }) => theme.black};
  height: 220px;
  padding: 0 160px;
`;

const HeaderLogo = styled.div`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 200px;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.ochre};
  text-transform: uppercase;
  line-height: 0.85;
`;

const SubHeaderLogo = styled.div`
  font-family: ${({ theme }) => theme.fontSubDisplay};
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.offWhite};
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  font-family: ${({ theme }) => theme.fontNav};
`;

const NavItem = styled.li`
  list-style: none;
  margin-right: 16px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.offWhite};
`;

const MainText = styled.div`
  font-size: 32px;
  font-family: "Open Sans";
  font-weight: 300;
  letter-spacing: 0.72px;
  line-height: 1.5;
  color: ${({ theme }) => theme.offWhite};
  margin: 120px 0;
  max-width: 100%;
`;
