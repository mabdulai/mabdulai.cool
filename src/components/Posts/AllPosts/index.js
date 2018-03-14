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
  background: ${colors.primary};
  border-radius: 4px;
  color: #fff;
`;

const PostButton = styled(Link)``;

class AllPosts extends Component {
  render() {
    return (
      <Container>
        <p>
          Check out all of my posts Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum
          exercitationem dolore sed voluptatum odit, nihil laborum magni quas dolorum.
        </p>
        <Button to="/posts">All Posts</Button>
      </Container>
    );
  }
}

export default AllPosts;
