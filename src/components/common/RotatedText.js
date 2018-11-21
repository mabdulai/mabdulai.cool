import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  transform: rotate(90deg);
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
