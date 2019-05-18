import styled from 'styled-components';

import React from 'react';
import { Title, SubTitle, Button, Description } from './';
import overwatch from '../../images/home/overwatch.jpg';

const DoubleContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  max-width: 1300px;
  margin: ${props => (props.right ? '0 auto 110px' : '0 auto 150px')};
  height: 70vh;
  min-height: ${props => props.theme.minHeight};
  max-height: ${props => props.theme.maxHeight};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 200px;
  }
`;

const ItemLeft = styled.div`
  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ItemRight = styled.div`
  width: calc(33.333333333% - 33.333333333px);
  position: absolute;
  right: 0;
  top: 100px;
  height: 100%;

  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    max-height: 380px;
  }
`;

const ItemLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(33.333333333% - 33.333333333px);
  position: absolute;
  height: 100%;
  z-index: 2;
  top: 100px;
  background: #eee;
  padding: 40px;

  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    height: 380px;
  }
`;

const ItemLeftImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  position: absolute;
  left: 100px;
  height: 100%;
  width: calc(66.666666666% - 166.666666667px);

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const ItemRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 2;
  background: #141424;
  color: #fff;
  padding: 40px;
`;

export const DoubleRow = () => {
  return (
    <DoubleContainer>
      <ItemLeft>
        <ItemLeftContent>
          <Description>Personal project - Code</Description>
          <div>
            <Title>Overstats</Title>
            <SubTitle>Getting the most out of your overwatch games</SubTitle>
          </div>
          <Button as="a" target="_blank" link="https://mabdulai.github.io/overstats/">
            View project
          </Button>
        </ItemLeftContent>
        <ItemLeftImage image={overwatch} />
      </ItemLeft>
      <ItemRight>
        <ItemRightContent>
          <Description>Travel - Photography</Description>
          <div>
            <Title>Seoul</Title>
            <SubTitle>A short trip to such an exciting city</SubTitle>
          </div>
          <Button to="/travel/seoul">View photos</Button>
        </ItemRightContent>
      </ItemRight>
    </DoubleContainer>
  );
};
