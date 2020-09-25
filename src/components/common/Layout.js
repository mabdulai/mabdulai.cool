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
            <HeaderContainer>
              <Nav>
                <Logo />
                <NavList>
                  <NavItem>Home</NavItem>
                  <NavItem>Projects</NavItem>
                  <NavItem>Thoughts</NavItem>
                </NavList>
              </Nav>
            </HeaderContainer>
          </Header>
          <Main>
            <MainContainer>
              <HeaderLogo>
                Mabdulai <br />{" "}
                <SubHeaderLogo>FRONTEND - DESIGN - PRODUCTIVITY</SubHeaderLogo>
              </HeaderLogo>
              {children}
            </MainContainer>
          </Main>
          <Footer>
            <FooterContainer>
              <FooterLinks>
                <FooterList>
                  <FooterTitle>Site</FooterTitle>
                  <FooterItem href="/">Home</FooterItem>
                  <FooterItem href="/projects">Projects</FooterItem>
                  <FooterItem href="/thoughts">Thoughts</FooterItem>
                  <FooterItem href="/uses">Uses</FooterItem>
                  <FooterItem href="/colophone">Colophone</FooterItem>
                </FooterList>
                <FooterList>
                  <FooterTitle>Links</FooterTitle>
                  <FooterItem target="_blank" href="www.github.com/mabdulai">
                    Github
                  </FooterItem>
                  <FooterItem target="_blank" href="www.twitter.com/mabdulai90">
                    Twitter
                  </FooterItem>
                  <FooterItem
                    target="_blank"
                    href="www.dribbble.com/mabdulai90"
                  >
                    Dribbble
                  </FooterItem>
                  <FooterItem target="_blank" href="www.linkedin.com">
                    LinkedIn
                  </FooterItem>
                </FooterList>
              </FooterLinks>
              <LatestBlog>
                <FooterTitle>Links</FooterTitle>
                <BlogTitle>Lorem Ipsum Article #1</BlogTitle>
                <BlogExcerpt>
                  My name is Michael Abdulai, and I make things using
                  Javascript. Currently, I’m helping recruiting stay human at
                  HiringSolved. In the last 30 days, I’ve pushed 2 commits to
                  GitHub, sent 16 tweets...
                </BlogExcerpt>
              </LatestBlog>
            </FooterContainer>
          </Footer>
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
  flex: 1;
  align-items: center;
  justify-content: space-between;
  border-top: 24px solid ${({ theme }) => theme.ochre};
  background: ${({ theme }) => theme.black};
  padding: 70px 160px 50px;
  color: ${({ theme }) => theme.ochre};
`;

const HeaderContainer = styled.div`
  flex: 1;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.layoutMaxWidth};
  margin: 0 auto;
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${({ theme }) => theme.black};
  padding: 0 160px;
`;

const MainContainer = styled.div`
  max-width: ${({ theme }) => theme.layoutMaxWidth};
  margin: 0 auto;
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

const LatestBlog = styled.div`
  max-width: 500px;
`;
const BlogTitle = styled.div``;
const BlogExcerpt = styled.div``;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.ochre};
  color: ${({ theme }) => theme.black};
  height: 400px;
  padding: 0 160px;
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.layoutMaxWidth};
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 0 auto;
  padding: 32px 0;
`;

const FooterLinks = styled.div`
  display: flex;
`;

const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-family: "Mark Pro";
  text-transform: uppercase;
  margin-right: 120px;
`;
const FooterItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-weight: 500;
  padding: 8px 0;
  transition: all 100ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.darkOcher};
  }
`;
const FooterTitle = styled.div`
  font-weight: bold;
  padding-bottom: 12px;
`;
