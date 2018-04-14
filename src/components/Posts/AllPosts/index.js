import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../../../styles/colors';

import Button from '../../Buttons/MainButton';

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

const PostButton = styled(Link)``;

class AllPosts extends Component {
  render() {
    return (
      <Container>
        <Title>All Posts</Title>
        <Text>
          Check out all of my posts Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum
          exercitationem dolore sed voluptatum odit, nihil laborum magni quas dolorum.
        </Text>
        <Button fontSize="1.2rem" to="/posts">
          View all posts
        </Button>
      </Container>
    );
  }
}

export default AllPosts;
