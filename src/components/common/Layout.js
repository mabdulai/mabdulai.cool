import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Logo from "./Logo";
import PageTitle from "./PageTitle";
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
        <Footer>
          <FooterContainer>
            <FooterLinks>
              <FooterList>
                <FooterTitle>Site</FooterTitle>
                <FooterItem to="/">
                  <span>Home</span>
                </FooterItem>
                <FooterItem to="/projects">
                  <span>Projects</span>
                </FooterItem>
                <FooterItem to="/thoughts">
                  <span>Thoughts</span>
                </FooterItem>
                <FooterItem to="/uses">
                  <span>Uses</span>
                </FooterItem>
              </FooterList>
              <FooterList>
                <FooterTitle>Links</FooterTitle>
                <FooterItem
                  as="a"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.github.com/mabdulai"
                >
                  <span>Github</span>
                </FooterItem>
                <FooterItem
                  as="a"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.twitter.com/mabdulai90"
                >
                  <span>Twitter</span>
                </FooterItem>
                <FooterItem
                  as="a"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.dribbble.com/mabdulai90"
                >
                  <span>Dribbble</span>
                </FooterItem>
                <FooterItem
                  as="a"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/michaelabdulai/"
                >
                  <span>LinkedIn</span>
                </FooterItem>
              </FooterList>
            </FooterLinks>
            <LatestBlog>
              <FooterTitle>Latest Thougts</FooterTitle>
              <BlogTitle href={latestPost.fields.slug}>
                {latestPost.frontmatter.title}
              </BlogTitle>
              <BlogExcerpt>{latestPost.excerpt}</BlogExcerpt>
            </LatestBlog>
          </FooterContainer>
        </Footer>
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

const LatestBlog = styled.div`
  width: 600px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFooter};

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BlogTitle = styled.a`
  font-family: ${({ theme }) => theme.fontFooter};
  font-weight: ${({ theme }) => theme.bold};
  font-size: 40px;
  color: ${({ theme }) => theme.blackLinks};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.9;
`;

const BlogExcerpt = styled.div`
  font-family: ${({ theme }) => theme.fontMain};
  color: ${({ theme }) => theme.blackLinks};
  font-weight: 500;
  line-height: 1.4;
  margin-top: 8px;
  font-size: 16px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.ochre};
  color: ${({ theme }) => theme.blackLinks};
  height: 400px;
  padding: 0 160px;

  @media (max-width: 1200px) {
    height: 300px;
    width: 100%;
    padding: 0;
  }
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.layoutMaxWidth};
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 0 auto;
  padding: 32px 0;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const FooterLinks = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    justify-content: space-around;
    flex: 1;
  }
`;

const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFooter};
  margin-right: 120px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

const FooterItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.blackLinks};
  font-weight: 500;
  padding: 8px 0;
  opacity: 0.9;

  span {
    transition: all 100ms ease-in-out;
    border-bottom: 2px solid ${({ theme }) => theme.ochre};
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.black};
      border-bottom: 2px solid ${({ theme }) => theme.black};
    }
  }
`;

const FooterTitle = styled.div`
  font-weight: 900;
  padding-bottom: 24px;
  font-size: 32px;
  font-family: ${({ theme }) => theme.fontFooter};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
