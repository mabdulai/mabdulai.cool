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
              <Title>Ducky One</Title>
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
                  rel="noreferrer"
                  href="https://github.com/framer/syntax#:~:text=Framer%20Syntax%20is%20a%20dark,amazing%20products%20for%20the%20Web."
                >
                  Framer Syntax
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/tonsky/FiraCode"
                >
                  Fira Code
                </a>
                ,{" "}
                <a target="_blank" rel="noreferrer" href="#">
                  My settings
                </a>
              </Description>
            </Item>

            <Item>
              <Title>iTerm</Title>
              <Description>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://raw.githubusercontent.com/mbadolato/iTerm2-Color-Schemes/master/schemes/Framer.itermcolors"
                >
                  Framer theme
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/tonsky/FiraCode"
                >
                  Fira Code
                </a>
              </Description>
            </Item>
            <Item>
              <Title>Figma</Title>
              <a target="_blank" rel="noreferrer" href="/"></a>
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
  line-height: 28px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
  div:first-child {
    padding-right: 100px;

    @media (max-width: 1200px) {
      padding-right: 0;
    }
  }
`;

const CategoryTitle = styled.div`
  color: #ccc;
  font-weight: bold;

  @media (max-width: 1200px) {
    font-size: 30px;
    margin-bottom: 24px;
  }
`;

const ItemContainer = styled.div`
  margin-bottom: 16px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #ccc;
  a {
    color: ${({ theme }) => theme.ochre};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.div`
  @media (max-width: 1200px) {
    font-size: 24px;
    margin-bottom: 4px;
  }
`;
