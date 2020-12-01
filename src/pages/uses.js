import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

class Uses extends Component {
  render() {
    const { path } = this.props;
    return (
      <Layout path={path}>
        <MainText>
          <Category title="Hardware">
            <Item>
              <Title>Macbook Air 2013</Title>
              <Description>
                1,3 GHz Dual-Core Intel Core i5 8GB memory
              </Description>
            </Item>
            <Item>
              <Title>Dell Ultrasharp 27"</Title>
              <Description>U2715H</Description>
            </Item>

            <Item>
              <Title>Ducky one</Title>
              <Description>CherryMX Blue Switches</Description>
            </Item>
            <Item>
              <Title>MX Master 2S</Title>
            </Item>
          </Category>
          <Category title="Software">
            <Item description="">
              <Title>VS Code</Title>
              <Description>
                <a
                  target="_blank"
                  href="https://github.com/framer/syntax#:~:text=Framer%20Syntax%20is%20a%20dark,amazing%20products%20for%20the%20Web."
                >
                  Framer Syntax
                </a>
                ,{" "}
                <a target="_blank" href="#https://github.com/tonsky/FiraCode">
                  Fira Code
                </a>
                ,{" "}
                <a target="_blank" href="#">
                  My settings
                </a>
              </Description>
            </Item>

            <Item>
              <Title>iTerm</Title>
              <Description>
                <a
                  target="_blank"
                  href="https://raw.githubusercontent.com/mbadolato/iTerm2-Color-Schemes/master/schemes/Framer.itermcolors"
                >
                  Framer theme
                </a>
                ,{" "}
                <a target="_blank" href="https://github.com/tonsky/FiraCode">
                  Fira Code
                </a>
              </Description>
            </Item>
            <Item>
              <Title>Figma</Title>
            </Item>
            <Item>
              <Title>Notion</Title>
            </Item>
          </Category>
        </MainText>
      </Layout>
    );
  }
}

export default Uses;

const Category = ({ title, children }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <div>{children}</div>
    </CategoryContainer>
  );
};

const Item = ({ children }) => {
  return (
    <ItemContainer>
      <div>{children}</div>
    </ItemContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  div:first-child {
    padding-right: 100px;
  }
`;

const CategoryTitle = styled.div`
  color: #aaa;
`;

const ItemContainer = styled.div`
  margin-bottom: 16px;
`;

const Description = styled.div`
  font-size: 16px;
  a {
    text-decoration: none;
    color: currentColor;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.div``;
