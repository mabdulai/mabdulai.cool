import React from 'react';
import styled from 'styled-components';
import { Row, Content, Description, SubTitle, Title, Button } from './';

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  width: 60%;
  height: 70vh;
  min-height: ${props => props.theme.minHeight};
  max-height: ${props => props.theme.maxHeight};
  overflow: hidden;

  @media screen and (max-width: 800px) {
    position: static;
    height: 380px;
    width: 100%;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  height: 100%;
  right: 0;
  position: absolute;
  top: 100px;
  width: 100%;

  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    height: 380px;
  }
`;

const ContentContainer = styled.div`
  background-color: #141424;
  height: 70vh;
  min-height: ${props => props.thememinHeight};
  max-height: ${props => props.theme.maxHeight};
  width: 60%;
  margin-top: 100px;
  color: #fff;

  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    min-height: 380px;
    max-height: 380px;
  }
`;

export const RowItemRight = props => {
  return (
    <Row>
      <ContentContainer>
        <Content>
          <Description>{props.description}</Description>
          <div>
            <Title>{props.title}</Title>
            <SubTitle>{props.subtitle}</SubTitle>
          </div>
          <Button to={props.link}>{props.buttonText}</Button>
        </Content>
      </ContentContainer>
      <ImageContainer>
        <Image image={props.image} />
      </ImageContainer>
    </Row>
  );
};
