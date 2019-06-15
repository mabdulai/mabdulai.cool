import styled from 'styled-components';
import React from 'react';
import { Row } from './';

const MainTitle = styled.h1`
  font-size: 80px;
  margin-top: 0;
  max-width: 800px;
  transform: translateY(0) scale(1);
  transform-origin: left bottom;

  @media screen and (max-width: 800px) {
    line-height: 80px;
    margin-bottom: 10px;
    padding: 0 20px;
  }
`;

const MainSubTitle = styled.h2`
  font-size: 20px;
  font-family: 'Modern Era', monospace;
  font-weight: 300;
  line-height: 1.7;
  background: #ff6e6e;
  color: #fff;
  padding: 4px 8px;
  display: inline-block;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
    width: 95%;
    margin: 0 auto;
  }
`;

const PageHeading = styled.section`
  padding: 80px 0 0px;
  width: 100%;
`;

export const Heading = () => {
  return (
    <PageHeading>
      <Row>
        <MainTitle>Michael Abdulai</MainTitle>
        <MainSubTitle>My personal playground for everything that sparks my creativity.</MainSubTitle>
      </Row>
    </PageHeading>
  );
};
