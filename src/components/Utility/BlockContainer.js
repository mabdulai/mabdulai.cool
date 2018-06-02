import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

const slideLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;
export default styled.div`
  padding: 0;
  overflow: hidden;
  margin: 1rem 0 16rem;
  animation-fill-mode: forwards;

  &:nth-of-type(even) {
    animation: ${slideLeft};
  }

  &:nth-of-type(odd) {
    animation: ${slideRight};
  }

  @media (max-width: 1200px) {
    margin: 1rem 0 4rem;
  }
`;
