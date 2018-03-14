import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 25rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #fafafa;
`;

class AllProjects extends Component {
  render() {
    return (
      <Container>
        <Link to="/projects">All Projects</Link>
      </Container>
    );
  }
}

export default AllProjects;
