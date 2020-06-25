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
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Container>
          <GlobalStyle whiteColor />
          {this.props.children}
        </Container>
      </ThemeProvider>
    );
  }
}

export default Layout;
