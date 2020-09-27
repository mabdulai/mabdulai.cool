import React, { Component } from "react";
import styled from "styled-components";
class PageTitle extends Component {
  render() {
    const { path } = this.props;
    return (
      <>
        <PageTitleText>{getTitleText(path)}</PageTitleText>
        {path === "/" && <SubTitle>FRONTEND - DESIGN - PRODUCTIVITY</SubTitle>}
      </>
    );
  }
}

const getTitleText = (path) => {
  switch (path) {
    case "/":
      return "Mabdulai";
    case "/projects/":
      return "Projects";
    case "/thoughts/":
      return "Thoughts";
    case "/uses/":
      return "Uses";
    case "/build-with/":
      return "Build with";
    default:
      break;
  }
};

export default PageTitle;

const PageTitleText = styled.div`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 200px;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.ochre};
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: 5px;
`;

const SubTitle = styled.div`
  font-family: ${({ theme }) => theme.fontSubDisplay};
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.offWhite};
  margin-top: 4px;
  letter-spacing: 1px;
`;
