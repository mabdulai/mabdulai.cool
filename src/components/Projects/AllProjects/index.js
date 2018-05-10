import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

import Button from '../../Utility/MainButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 25rem;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  background: ${colors.primary};
  border-radius: 4px;
  color: #fff;
`;

const Title = styled.div`
  border-bottom: 1px solid #fff;
  padding: 5px 20px 10px;
  text-transform: uppercase;
  font-family: 'Nunito';
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

const Text = styled.div`
  max-width: 100rem;
  padding: 7rem 0;
  font-size: 2.5rem;
  text-align: center;
`;

class AllProjects extends Component {
  render() {
    return (
      <Container>
        <Title>All Projects</Title>
        <Text>
          Check out all of my posts Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum
          exercitationem dolore sed voluptatum odit, nihil laborum magni quas dolorum.
        </Text>
        <Button fontSize="1.2rem" to="/projects">
          View all projects
        </Button>
      </Container>
    );
  }
}

export default AllProjects;
