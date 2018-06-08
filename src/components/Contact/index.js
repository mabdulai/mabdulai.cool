import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { colors, shadows } from '../../styles/';

import Icons from './Icons';

const Container = styled.div`
  display: flex;
  min-height: 25rem;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 2rem 5rem;
    min-height: 30rem;
  }
`;

const LeftSide = styled.div`
  display: flex;
  width: 60%;
  padding: 5rem;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  transform: translate(-5rem, 5rem);
  background: #fff;
  max-height: 15rem;
  box-shadow: ${shadows.mainShadow};
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.475);

  ${Container}:hover & {
    transform: translate(-8rem, 5rem);
  }

  @media (max-width: 1200px) {
    transform: translate(0rem, 0rem);
    box-shadow: none;
    ${Container}:hover & {
      transform: translate(0rem, 0rem);
    }
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  color: #fff;

  span {
    border-bottom: 3px solid ${colors.succes};
  }
`;

const IconTitle = styled(Title)`
  color: ${colors.secondary};
  padding-bottom: 2rem;
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <LeftSide>
          <Title>
            Feel free to <span>say hi!</span>
          </Title>
        </LeftSide>
        <RightSide>
          <IconTitle>It also me</IconTitle>
          <Icons />
        </RightSide>
      </Container>
    );
  }
}

export default Contact;
