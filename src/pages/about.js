import React, { Component } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 1300px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 65%;
  padding-right: 120px;
`;
const Right = styled.div`
  width: 35%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Gilroy';
  text-transform: uppercase;
  font-weight: 900;
`;

const Subtitle = styled.h2`
  display: inline-block;
  font-size: 12px;
  font-family: 'roboto mono';
  text-transform: uppercase;
  font-weight: 300;
  background: #000;
  color: #fff;
  padding: 4px 8px;
`;

const Block = styled.p`
  padding-top: 32px;
  max-width: 100ch;
`;

const BlockTitle = styled.h3`
  font-family: 'Gilroy';
  font-size: 18px;
  padding-bottom: 4px;
`;
const BlockText = styled.p``;

const StatBlock = styled.div`
  padding-bottom: 24px;

  strong {
    background: #000;
    color: #fff;
    font-weight: 300;
    padding: 4px 8px;
  }
`;

const Stats = styled.p`
  display: flex;
  flex-direction: column;
`;
class AboutsPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <ContentContainer>
            <Left>
              <Title>Michael Abdulai</Title>
              <Subtitle>Frontend Developer @ ABOSS </Subtitle>
              <Block>
                <BlockTitle>What are React Hooks</BlockTitle>
                <BlockText>
                  Writing React Components has gone through different phases since the beginning. We started out with.
                  CreateReactClass. This was because ES6 was not yet fully available and therefor we couldn't use
                  Classes yet. With the release of React 16 we would have a new way of creating React components. The
                  before mentioned createReactClass was deprecated for the new ES6 syntax of writing classes with
                  React.component Extends ComponentName. This was the way of writing stateful components with React. If
                  you had simple components that did not have any state you could also write Stateless Components. These
                  components did not rely on the Class syntax that would often confuse newcomers. Stateless components
                  are regular Javascript functions this brings in some constraints but also some benefits.
                </BlockText>
              </Block>
              <Block>
                <BlockText>
                  Writing React Components has gone through different phases since the beginning. We started out with.
                  CreateReactClass. This was because ES6 was not yet fully available and therefor we couldn't use
                  Classes yet. With the release of React 16 we would have a new way of creating React components. The
                  before mentioned createReactClass was deprecated for the new ES6 syntax of writing classes with
                  React.component Extends ComponentName. This was the way of writing stateful components with React. If
                  you had simple components that did not have any state you could also write Stateless Components. These
                  components did not rely on the Class syntax that would often confuse newcomers. Stateless components
                  are regular Javascript functions this brings in some constraints but also some benefits.
                </BlockText>
              </Block>
              <Block>
                <BlockText>
                  With the release of React 16.8.3 we now have a way to write React components with state without using
                  the Class syntax. There are some new functions added to the React library to achieve this and we will
                  walk through them throughout the rest of this study of React Hooks.
                </BlockText>
              </Block>
            </Left>
            <Right>
              <Stats>
                Stats
                <StatBlock>
                  <strong>INTERESTS</strong> reading, travel, finance, cars, running, photography, design, coffee,
                  sushi, modern architecture, prototyping, a clean workspace, cooking
                </StatBlock>
                <StatBlock>
                  <strong>INTERESTS</strong> reading, travel, finance, cars, running, photography, design, coffee,
                  sushi, modern architecture, prototyping, a clean workspace, cooking
                </StatBlock>
                <StatBlock>
                  <strong>INTERESTS</strong> reading, travel, finance, cars, running, photography, design, coffee,
                  sushi, modern architecture, prototyping, a clean workspace, cooking
                </StatBlock>
              </Stats>
            </Right>
          </ContentContainer>
        </Container>
      </Layout>
    );
  }
}

export default AboutsPage;
