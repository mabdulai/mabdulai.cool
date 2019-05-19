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
  font-family: 'Gilroy';
  font-size: 18px;
  padding-bottom: 4px;
`;
const BlockText = styled.p`
  font-family: 'roboto mono';
  font-size: 16px;
  max-width: 100ch;
`;

export const Block = props => {
  return (
    <BlockContainer>
      <BlockTitle>{props.title}</BlockTitle>
      <BlockText>{props.children}</BlockText>
    </BlockContainer>
  );
};
