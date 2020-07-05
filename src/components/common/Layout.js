import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";
import theme from "../../style/theme";
import GlobalStyle from "../../style/global";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Helmet></Helmet>
        <Container>
          <GlobalStyle whiteColor />
          <Header></Header>
          <Main>{this.props.children}</Main>
          <Footer>bla</Footer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Layout;

const Header = styled.header`
  border-top: 24px solid ${({ theme }) => theme.ochre};
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  background: ${({ theme }) => theme.black};
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.ochre};
  color: ${({ theme }) => theme.black};
  height: 220px;
  padding: 0 72px;
`;
