import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Logo from "./logo";
import PageTitle from "./PageTitle";
import theme from "../../style/theme";
import GlobalStyle from "../../style/global";
import usePosts from "../../hooks/usePosts";
// import background from "../../assets/main-background.svg";
import background from "../../assets/bg.svg";

const Layout = ({ children, path }) => {
  const posts = usePosts();
  const latestPost = posts[posts.length - 1].node;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle whiteColor />
      <Helmet></Helmet>
      <Container>
        <BackgroundContainer>
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
        </BackgroundContainer>
        <Footer>
          <FooterContainer>
            <FooterLinks>
              <FooterList>
                <FooterTitle>Site</FooterTitle>
                <FooterItem to="/">Home</FooterItem>
                <FooterItem to="/projects">Projects</FooterItem>
                <FooterItem to="/thoughts">Thoughts</FooterItem>
                <FooterItem to="/uses">Uses</FooterItem>
                <FooterItem to="/build-with">Build with</FooterItem>
              </FooterList>
              <FooterList>
                <FooterTitle>Links</FooterTitle>
                <FooterItem
                  as="a"
                  target="_blank"
                  href="https://www.github.com/mabdulai"
                >
                  Github
                </FooterItem>
                <FooterItem
                  as="a"
                  target="_blank"
                  href="https://www.twitter.com/mabdulai90"
                >
                  Twitter
                </FooterItem>
                <FooterItem
                  as="a"
                  target="_blank"
                  href="https://www.dribbble.com/mabdulai90"
                >
                  Dribbble
                </FooterItem>
                <FooterItem
                  as="a"
                  target="_blank"
                  href="https://www.linkedin.com"
                >
                  LinkedIn
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
`;

const BackgroundContainer = styled.div`
  background: ${({ theme }) => theme.black};
  background-image: url(${background});
  background-size: cover;
`;

const Header = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  border-top: 24px solid ${({ theme }) => theme.ochre};
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

const NavItem = styled(Link)`
  list-style: none;
  margin-right: 16px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.ochre};
  transition: all 50ms ease-in-out;

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
  flex: 1;
  padding: 0 160px;
`;

const MainContainer = styled.div`
  width: ${({ theme }) => theme.layoutMaxWidth};
  max-width: ${({ theme }) => theme.layoutMaxWidth};
  margin: 0 auto;
`;

const LatestBlog = styled.div`
  width: 600px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFooter};
`;

const BlogTitle = styled.a`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: ${({ theme }) => theme.bold};
  font-size: 40px;
  color: ${({ theme }) => theme.blackLinks};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  text-transform: uppercase;
`;

const BlogExcerpt = styled.div`
  font-family: ${({ theme }) => theme.fontMain};
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
  font-family: ${({ theme }) => theme.fontFooter};
  margin-right: 120px;
`;

const FooterItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 2px solid ${({ theme }) => theme.ochre};
  transition: all 100ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.black};
    border-bottom: 2px solid ${({ theme }) => theme.black};
  }
`;

const FooterTitle = styled.div`
  font-weight: 900;
  padding-bottom: 24px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFooter};
  text-transform: uppercase;
`;
