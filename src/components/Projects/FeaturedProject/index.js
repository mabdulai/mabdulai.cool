import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../Buttons/MainButton';
import colors from '../../../styles/colors';
import overstats from '../../../projects/overstats.jpg';

const Container = styled.div`
  display: flex;
  max-height: 60rem;
  overflow: hidden;
`;

const FeaturedLeft = styled.div`
  overflow: hidden;

  img {
    object-fit: fill;
    border-radius: 3px;
  }
`;

const FeaturedRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 60rem;
  background: ${colors.primary};
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
  padding: 10rem 0;
  font-size: 3rem;
  color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  text-align: center;
  align-items: center;
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
            <Button fontSize="1.2rem">Go to Overstats</Button>
          </TextContainer>
        </FeaturedRight>
      </Container>
    );
  }
}

export default FeaturedProject;
