import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  position: sticky;
  display: flex;
  flex: 0;
  margin: 0;
  height: 100%;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  font-size: 100px;
  font-weight: 700;
  text-transform: uppercase;
`;

const RotatedText = ({ children }) => {
  return <Text>{children}</Text>;
};

export default RotatedText;
