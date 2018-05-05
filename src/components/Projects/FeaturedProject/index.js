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
  flex: 1;
  img {
    object-fit: cover;
    border-radius: 3px;
    display: flex;
  }
`;

const FeaturedRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  border-radius: 0px 3px 3px 0px;
`;

const Title = styled.div`
  border-bottom: 1px solid #fff;
  padding: 5px 20px 10px;
  text-transform: uppercase;
  font-family: 'Nunito';
  font-size: 2rem;
  letter-spacing: 0.2rem;
  color: #fff;
`;

const Text = styled.div`
  padding: 2rem;
  line-height: 1.5;
  font-size: 2rem;
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
  transform: translateX(80px) translateY(50px);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.05), 0 5px 15px rgba(0, 0, 0, 0.07);
  white-space: nowrap;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: translateX(85px) translateY(55px);
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
            <OverstatsButton fontSize="1.2rem">Go to Overstats</OverstatsButton>
          </TextContainer>
        </FeaturedRight>
      </Container>
    );
  }
}

export default FeaturedProject;
