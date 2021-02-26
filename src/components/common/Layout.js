import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Logo from "./Logo";
import PageTitle from "./PageTitle";
import Footer from "./footer";
import theme from "../../style/theme";
import usePosts from "../../utils/usePosts";
import background from "../../assets/grunge.png";
import favico from "../../assets/favicon.ico";
import "../../style/global.css";

const Layout = ({ children, path }) => {
  const posts = usePosts();
  const latestPost = posts[posts.length - 1].node;
  return (
    <ThemeProvider theme={theme}>
      <Helmet title="Mabdulai.cool">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href={favico} sizes="16x16" />
        <meta
          name="description"
          content="Mabdulai.cool is Michael Abdulai his personal page. Where I explore the topics of productivity, frontend development and design."
        />
      </Helmet>
      <Container>
        <Header>
          <HeaderContainer>
            <Nav>
              <Logo />
              <NavList>
                <NavItem $isActive={path === "/"} to="/">
                  Home
                </NavItem>
                <NavItem $isActive={path === "/projects/"} to="/projects">
                  Projects
                </NavItem>
                <NavItem $isActive={path === "/thoughts/"} to="/thoughts">
                  Thoughts
                </NavItem>
              </NavList>
            </Nav>
          </HeaderContainer>
        </Header>
        <Main>
          <MainContainer>
            <PageTitle path={path} />
            {children}
          </MainContainer>
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  border-top: 24px solid ${({ theme }) => theme.ochre};
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

  @media (max-width: 1200px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  font-family: ${({ theme }) => theme.fontNav};
`;

const NavItem = styled(Link)`
  list-style: none;
  margin-right: 16px;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: ${({ theme }) => theme.ochre};
  transition: all 50ms ease-in-out;
  text-transform: uppercase;

  border-bottom: ${({ theme, $isActive }) =>
    $isActive ? `2px solid ${theme.ochre}` : "none"};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.offWhiteHover};
    color: ${({ theme }) => theme.offWhiteHover};
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 160px;
  overflow: hidden;
  min-height: calc(100vh - 600px);

  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }
`;

const MainContainer = styled.div`
  width: ${({ theme }) => theme.layoutMaxWidth};
  max-width: ${({ theme }) => theme.layoutMaxWidth};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
  }
`;
