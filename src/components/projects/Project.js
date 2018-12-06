import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ImgContainer = styled.img`
  flex: 0;
  height: 200px;
  margin-bottom: 10px;
  overflow: hidden;
  width: 400px;
  object-fit: cover;
`;

const ProjectLink = styled(Link)`
  color: #222;
`;

const Description = styled.div``;

class Project extends Component {
  render() {
    return (
      <Container>
        <ImgContainer src="https://via.placeholder.com/400x300" alt="" />
        <ProjectLink to={this.props.link}> Title: {this.props.children}</ProjectLink>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dicta!</Description>
      </Container>
    );
  }
}

export default Project;
