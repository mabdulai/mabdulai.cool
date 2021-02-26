import React, { Component } from "react";
import styled from "styled-components";
class PageTitle extends Component {
  render() {
    const { path } = this.props;
    const text = getTitleText(path);
    return (
      <>
        <PageTitleText text={text}>
          <span>{text}</span>
        </PageTitleText>
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
  position: relative;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 200px;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.ochre};
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: 5px;
  @media (max-width: 1200px) {
    font-size: 80px;
    letter-spacing: 1px;
  }

  &:before {
    content: '${({ text }) => text}';
    position: absolute;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 200px;
    font-weight: ${({ theme }) => theme.bold};
    text-transform: uppercase;
    top: 100px;
    right: -20%;
    font-size: 300px;
    -webkit-text-stroke: 2px #cacaca;
    color: transparent;
    opacity: 0.1;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  &:after {
    position: absolute;
    right: 0;
    top: 200%;
    content: "EST. 2020. ";
    transform: rotate(90deg);
    font-size: 12px;
    text-transform: uppercase;
    text-align: right;

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const SubTitle = styled.div`
  font-family: ${({ theme }) => theme.fontSubDisplay};
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.offWhite};
  margin-top: 4px;
  letter-spacing: 1px;
  @media (max-width: 1200px) {
    font-size: 25px;
  }
`;
