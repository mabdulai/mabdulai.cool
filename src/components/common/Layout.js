import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";
import theme from "../../style/theme";
import GlobalStyle from "../../style/global";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  background: ${(props) => props.theme.main};
  margin: 0 auto;
  width: 1440px;
`;
class Layout extends Component {
  render() {
    const { displayHeader = true } = this.props;
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
          {displayHeader && <Header>Header</Header>}
          <Main>{this.props.children}</Main>
          <Footer>Footer</Footer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Layout;
