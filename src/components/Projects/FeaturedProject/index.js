import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../Buttons/MainButton';
import colors from '../../../styles/colors';
import overstats from '../../../projects/overstats.jpg';

const Container = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const FeaturedLeft = styled.div`
  img {
    object-fit: cover;
    display: flex;
  }
`;

const FeaturedRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  transform: translateY(3rem);
  max-width: 33.3rem;
  transition: all 150ms ease-in-out;

  ${Container}:hover & {
    transform: translateY(3.5rem);
  }
`;

const Title = styled.div`
  border-bottom: 3px solid ${colors.succes};
  padding: 5px 20px 10px;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  color: #fff;
`;

const Text = styled.div`
  padding: 2rem 5rem;
  line-height: 1.5;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const OverstatsButton = styled(Button)`
  padding: 3rem 12rem;
  transform: translateX(8rem) translateY(5rem);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.05), 0 5px 15px rgba(0, 0, 0, 0.07);
  white-space: nowrap;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: translateY(5rem) translateX(8.5rem);
  }
`;

class FeaturedProject extends Component {
  render() {
    return (
      <Container>
        <FeaturedLeft>
          <img src={overstats} />
        </FeaturedLeft>
        <FeaturedRight>
          <TextContainer>
            <Title>Overstats</Title>
            <Text> A fun experiment with the overwatch API. Getting the more fun stats of your user account</Text>
            <OverstatsButton to="#" fontSize="1.2rem">
              Go to Overstats
            </OverstatsButton>
          </TextContainer>
        </FeaturedRight>
      </Container>
    );
  }
}

export default FeaturedProject;
