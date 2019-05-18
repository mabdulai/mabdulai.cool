import React from 'react';
import styled from 'styled-components';
import { Row, Content, Description, Title, SubTitle, Button } from './';

const ImageContainer = styled.div`
  position: relative;
  width: 85%;
  height: 70vh;
  min-height: ${props => props.theme.minHeight};
  max-height: ${props => props.theme.maxHeight};

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ContentContainer = styled.div`
  position: absolute;
  bottom: -100px;
  height: 100%;
  right: 0;
  width: calc(33.33% - 33.33px);
  z-index: 2;
  background-color: #eee;

  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    height: 380px;
  }
`;

export const RowItemLeft = props => {
  return (
    <Row>
      <ImageContainer>
        <Image image={props.image} />
      </ImageContainer>
      <ContentContainer>
        <Content full>
          <Description>{props.description}</Description>
          <div>
            <Title>{props.title}</Title>
            <SubTitle>{props.subtitle}</SubTitle>
          </div>
          <Button to={props.link}>{props.buttonText}</Button>
        </Content>
      </ContentContainer>
    </Row>
  );
};
