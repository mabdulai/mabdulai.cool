import React, { Component } from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`;

const ImgContainer = styled.img`
  height: 300px;
  border-radius: 4px;
  border: 1px solid #aaa;
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProjectLink = styled(Link)`
  color: #222;
`;

const Description = styled.div`

`;

class Project extends Component {
  render() {
    return (
      <Container>
        <ImgContainer src="https://via.placeholder.com/400x300" alt="" />
        <ProjectLink to="/"> Title: {this.props.children}</ProjectLink>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dicta!</Description>

      </Container>
    );
  }
}

export default Project;
