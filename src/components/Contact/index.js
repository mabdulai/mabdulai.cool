import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../../styles/colors';

import Icons from './Icons';

const Title = styled.div`
  border-bottom: 1px solid #222;
  padding: 0.5rem 2rem 1rem;
  text-transform: uppercase;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #fafafa;
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <Icons />
      </Container>
    );
  }
}

export default Contact;
