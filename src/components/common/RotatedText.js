import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  display: flex;
  position: absolute;
  right: 50px;
  top: -55px;
  max-width: 0;
  transform: rotate(90deg);
  transform-origin: 0 50%;
  font-size: 100px;
  font-weight: 700;
  text-transform: uppercase;
  overflow: visible;
  z-index: 10;
`;

const RotatedText = ({ children }) => {
  return <Text>{children}</Text>;
};

export default RotatedText;
