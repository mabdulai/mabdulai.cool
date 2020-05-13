import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";
import theme from "../../style/theme";
import GlobalStyle from "../../style/global";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div``;

const Main = styled.main`
  background: ${props => props.theme.main};
`;
class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Container>
          <GlobalStyle whiteColor />
          <Nav>Nav</Nav>
          <Header>Header</Header>
          <Main>{this.props.children}</Main>
          <Footer>Footer</Footer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Layout;
