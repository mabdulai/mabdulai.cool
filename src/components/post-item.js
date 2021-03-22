import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PostItem = ({ post }) => {
  return (
    <Container>
      <Image>
        <img src={post.node.frontmatter.img} alt="" />
      </Image>
      <Info to={post.node.fields.slug}>
        <Category>#{post.node.frontmatter.category}</Category>
        <Title>{post.node.frontmatter.title}</Title>
        <Subinfo>
          {post.node.frontmatter.date} - Reading Time:{" "}
          {post.node.frontmatter.reading_time}
        </Subinfo>
      </Info>
    </Container>
  );
};

export default PostItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 780px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Image = styled.div`
  margin-right: 40px;
  @media (max-width: 1200px) {
    display: none;
  }
  img {
    object-fit: cover;
    width: 150px;
    height: 150px;
  }
`;

const Category = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 40px;
  margin-bottom: 8px;
`;

const Subinfo = styled.div`
  font-family: ${({ theme }) => theme.fontMain};
  font-size: 14px;
`;

const Info = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.85;

    ${Title} {
      text-decoration: underline;
    }
  }
`;
