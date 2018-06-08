import React, { Component } from 'react';
import Post from './Post';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { shadows } from '../../../styles/';

const Container = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'post-0 post-feat'
    'post-1 post-feat';
  padding: 0;
  margin: 0;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: ${shadows.mainShadow};
`;

class FeaturedPosts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <Container>
        {posts.map((post, index) => <Post key={post.node.frontmatter.title} number={index} post={post} />)}
      </Container>
    );
  }
}

export default FeaturedPosts;
