import styled from 'styled-components';
import React from 'react';

const BlockContainer = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media screen and (max-width: 800px) {
    align-items: flex-start;
  }
`;

const BlockTitle = styled.h3`
  font-family: 'Medium Era';
  font-size: 32px;
  padding-bottom: 4px;
`;
const BlockText = styled.div`
  font-family: 'Medium Era';
  font-size: 16px;
  max-width: 80ch;
`;

export const Block = props => {
  return (
    <BlockContainer>
      <BlockTitle>{props.title}</BlockTitle>
      <BlockText>{props.children}</BlockText>
    </BlockContainer>
  );
};
