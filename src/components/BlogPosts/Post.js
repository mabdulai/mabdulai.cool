import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../../styles/colors';

const PostLink = styled(Link)`
  text-decoration: none;
  color: ${colors.fontMain};
  font-weight: 600;
  transition: 150ms all ease-in-out;
`;

const PostItem = styled.li`
  list-style: none;
  padding: 7rem;
  margin: 0;
  width: 50%;
`;

class PostContainer extends Component {
  render() {
    const { post } = this.props;
    return (
      <PostItem>
        <PostLink to={post.node.frontmatter.path}>{post.node.frontmatter.title}</PostLink>
      </PostItem>
    );
  }
}

export default PostContainer;
