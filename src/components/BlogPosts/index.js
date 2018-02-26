import React, { Component } from 'react';
import Post from './Post';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BlogContainer = styled.ul`
  width: 100vw;
  background: #7a7a7a;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

class BlogPosts extends Component {
  render() {
    const { posts } = this.props;
    return <BlogContainer>{posts.map(post => <Post key={post.node.frontmatter.title} post={post} />)}</BlogContainer>;
  }
}

export default BlogPosts;
