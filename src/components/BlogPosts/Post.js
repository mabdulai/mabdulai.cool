import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../../styles/colors';

const PostLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: ${colors.fontMain};
  font-weight: 600;
  transition: all 150ms ease-in-out;
  padding: 0rem 1rem;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

class PostContainer extends Component {
  render() {
    const { post } = this.props;
    return <PostLink to={post.node.frontmatter.path}>{post.node.frontmatter.title}</PostLink>;
  }
}

export default PostContainer;
