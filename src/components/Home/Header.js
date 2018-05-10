import styled from 'styled-components';
import React from 'react';
import colors from '../../styles/colors';
import Intro from '../Utility/Intro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55rem;
  margin: 0 auto;
`;

const SubIntro = styled.div`
  padding: 2rem 0 10rem;
  line-height: 3.2rem;
  font-size: 2rem;
  max-width: 50rem;
  transform: translateX(5rem);
`;

const Cutebar = styled.div`
  display: flex;
  width: 60rem;
  height: 1rem;
  background: ${colors.primary};
  justify-self: flex-end;
  transform: translateX(10rem);
`;

const InlineLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  height: 1.5rem;
  max-width: 7rem;
  flex: 0;
  flex-wrap: nowrap;
  align-items: flex-end;
  color: #222;
  transition: 150ms ease-in-out;

  &:hover {
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
        Currently kicking ass @{' '}
        <InlineLink href="http://www.a-boss.net" target="_blank">
          <div>ABOSS</div>
        </InlineLink>{' '}
        in Amsterdam. with a passion for Javascript, design and mechanical keyboards.
      </SubIntro>
    </Container>
  );
};

export default Header;
