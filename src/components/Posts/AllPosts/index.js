import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 25rem;
  align-items: center;
  justify-content: center;
`;

const PostButton = styled(Link)``;

class AllPosts extends Component {
  render() {
    return (
      <Container>
        <Link>All Posts</Link>
      </Container>
    );
  }
}

export default AllPosts;
