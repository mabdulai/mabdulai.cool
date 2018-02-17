import React, { Component } from 'react';
import Post from './Post';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BlogContainer = styled.ul`
  padding: 20px 0;
  flex-direction: column;
`;

class BlogPosts extends Component {
  render() {
    const { posts } = this.props;
    return <BlogContainer>{posts.map(post => <Post key={post.node.frontmatter.title} post={post} />)}</BlogContainer>;
  }
}

export default BlogPosts;
