import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../Utility/MainButton';
import { colors, shadows } from '../../../styles/';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 0 5rem;
    align-items: center;
    max-width: 66.7rem;
    margin: 0 auto;
  }
`;

const FeaturedLeft = styled.div`
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.8);

  ${Container}:hover & {
    transform: translateY(-2rem);
  }

  img {
    object-fit: cover;
    display: flex;
    width: 100%;
    max-width: 667px;
    height: auto;
  }
`;

const FeaturedRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background: ${colors.primary};
  transform: translateY(3rem);
  max-width: 33.3rem;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.575);

  ${Container}:hover & {
    transform: translateY(5rem);
  }

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 5rem;
  }
`;

const Title = styled.div`
  border-bottom: 3px solid ${colors.succes};
  margin: 0 10rem 0 5rem;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  color: #fff;
`;

const Text = styled.div`
  padding: 2rem 10rem 2rem 5rem;
  line-height: 1.5;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 300;
  color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
  }
`;

const ProjectButton = styled(Button)`
  padding: 3rem 12rem;
  transform: translateX(8rem) translateY(5rem);
  box-shadow: ${shadows.mainShadow};
  white-space: nowrap;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.475);

  &:hover {
    transform: ${({ reverse }) =>
      reverse ? 'translateY(5rem) translateX(12rem)' : 'translateY(5rem) translateX(4rem)'};
  }

  @media (max-width: 1200px) {
    transform: translateX(0rem) translateY(0rem);

    &:hover {
      transform: translateX(0rem) translateY(0rem);
    }
  }
`;

class ProjectPreview extends Component {
  render() {
    const { title, img, text, reverse, link } = this.props;
    return (
      <Container reverse={reverse}>
        <FeaturedLeft>
          <img src={img} />
        </FeaturedLeft>
        <FeaturedRight>
          <TextContainer>
            <Title>{title}</Title>
            <Text> {text} </Text>
            <ProjectButton to={link} reverse={reverse} fontSize="1.2rem">
              Go to {title}
            </ProjectButton>
          </TextContainer>
        </FeaturedRight>
      </Container>
    );
  }
}

export default ProjectPreview;
