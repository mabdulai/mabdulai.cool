import React, { Component } from 'react';
import { Layout } from '../../components/common/';
import styled from 'styled-components';

const LayoutContainer = styled(Layout)`
  background: red;
  @media screen and (max-width: 800px) {
    padding-bottom: 100px;
  }
`;

const Container = styled.section`
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    padding: 0 30px;
    text-align: left;
  }
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
const BlockText = styled.div`
  font-family: 'roboto mono';
  font-size: 16px;
`;

class HooksPage extends Component {
  render() {
    return (
      <LayoutContainer>
        <Container>
          <Title>React Hooks</Title>
          <Subtitle>Small experiments and general studies</Subtitle>
          <Block>
            <BlockTitle>What are React Hooks</BlockTitle>
            <BlockText>
              Writing React Components has gone through different phases since the beginning. We started out with.
              CreateReactClass. This was because ES6 was not yet fully available and therefor we couldn't use Classes
              yet. With the release of React 16 we would have a new way of creating React components. The before
              mentioned createReactClass was deprecated for the new ES6 syntax of writing classes with React.component
              Extends ComponentName. This was the way of writing stateful components with React. If you had simple
              components that did not have any state you could also write Stateless Components. These components did not
              rely on the Class syntax that would often confuse newcomers. Stateless components are regular Javascript
              functions this brings in some constraints but also some benefits.
            </BlockText>
          </Block>
          <Block>
            <BlockText>
              Writing React Components has gone through different phases since the beginning. We started out with.
              CreateReactClass. This was because ES6 was not yet fully available and therefor we couldn't use Classes
              yet. With the release of React 16 we would have a new way of creating React components. The before
              mentioned createReactClass was deprecated for the new ES6 syntax of writing classes with React.component
              Extends ComponentName. This was the way of writing stateful components with React. If you had simple
              components that did not have any state you could also write Stateless Components. These components did not
              rely on the Class syntax that would often confuse newcomers. Stateless components are regular Javascript
              functions this brings in some constraints but also some benefits.
            </BlockText>
          </Block>
          <Block>
            <BlockText>
              With the release of React 16.8.3 we now have a way to write React components with state without using the
              Class syntax. There are some new functions added to the React library to achieve this and we will walk
              through them throughout the rest of this study of React Hooks.
            </BlockText>
          </Block>
        </Container>
      </LayoutContainer>
    );
  }
}

export default HooksPage;
