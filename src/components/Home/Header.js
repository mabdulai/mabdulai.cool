import styled, { keyframes } from 'styled-components';
import React from 'react';
import { colors, shadows } from '../../styles/';
import Intro from '../Utility/Intro';

import { flash } from 'react-animations';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55rem;
  margin: 0 auto;

  @media (max-width: 1000px) {
  }
`;

const fadeAnimation = keyframes`${flash}`;

const SubIntro = styled.div`
  padding: 2rem 0 10rem;
  line-height: 3.2rem;
  font-size: 2rem;
  max-width: 50rem;
  opacity: 0;
  transform: translateX(5rem);
  animation: 200ms ${fadeAnimation};
  animation-fill-mode: forwards;
  animation-delay: 2000ms;

  @media (max-width: 1200px) {
    padding: 2rem 5rem;
  }
`;

const Cutebar = styled.div`
  display: flex;
  width: 60rem;
  height: 1rem;
  background: ${colors.primary};
  transform: translateX(10rem);
  box-shadow: 5px 5px ${colors.succes};
  @media (max-width: 1200px) {
    transform: translateX(0rem);
    margin: 2rem 5rem;
    overflow: hidden;
    width: 40rem;
  }
`;

const InlineLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  max-height: 0rem;
  max-width: 7rem;
  flex: 0;
  flex-wrap: nowrap;
  align-items: flex-end;
  color: #222;
  transition: all 50ms ease-in-out;

  &:hover {
    max-height: 1.5rem;
    background: ${colors.succes};
  }
`;

const Header = () => {
  return (
    <Container>
      <Intro>Hi!👋 I'm Michael Abdulai, a Frontend Developer from The Netherlands.</Intro>
      <div>
        <Cutebar />
      </div>
      <SubIntro>
        Kicking ass @{' '}
        <InlineLink href="http://www.a-boss.net" target="_blank">
          <div>ABOSS</div>
        </InlineLink>{' '}
        in Amsterdam. with a passion for Javascript, design and mechanical keyboards.
      </SubIntro>
    </Container>
  );
};

export default Header;
