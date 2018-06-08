import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { colors } from '../../../styles/';
const PostLink = styled(Link)`
  text-decoration: none;
  color: ${colors.fontMain};
  font-weight: 600;
  transition: 150ms all ease-in-out;
`;

const PostItem = styled.li`
  display: flex;
  flex: 1;
  list-style: none;
  padding: 7rem;
  margin: 0;
  grid-area: ${props => (props.border === 2 ? 'post-feat' : `post-${props.border}`)};
  transition: all 150ms ease-in-out;
  &:hover {
    box-shadow: 0 0px 5px rgba(50, 50, 93, 0.05);
  }
`;

class PostContainer extends Component {
  render() {
    const { post, number } = this.props;
    return (
      <PostItem border={number}>
        <PostLink to={post.node.frontmatter.path}>{post.node.frontmatter.title}</PostLink>
      </PostItem>
    );
  }
}

export default PostContainer;
