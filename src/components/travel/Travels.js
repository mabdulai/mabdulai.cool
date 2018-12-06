import React, { Component } from 'react';
import Travel from './Travel';
import styled from 'styled-components';

const Container = styled.section`
  grid-area: travels;
  padding-right: 32px;
  border-right: 1px solid #efefef;
`;

class Travels extends Component {
  render() {
    return (
      <Container>
        <Travel
          title="New York"
          thumb="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4639e1b6276d9554431592d07edc98e2&auto=format&fit=crop&w=1950&q=80"
          link="/travel/new-york"
        />
        <Travel
          title="Hong Kong"
          thumb="https://images.unsplash.com/photo-1528035177028-f52bf3d7b312?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c514af3b8d95058c55faa9f71e9f093&auto=format&fit=crop&w=1950&q=80"
          link="/travel/hong-kong"
        />
        <Travel
          title="Seoul"
          thumb="https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff47a951e987a1be1a4f6e836317a3b&auto=format&fit=crop&w=1950&q=80"
          link="/travel/seoul"
        />
      </Container>
    );
  }
}

export default Travels;
