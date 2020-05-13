import React from "react";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <header>Blog Thing</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
