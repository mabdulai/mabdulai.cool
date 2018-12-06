import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const TravelLink = styled(Link)``;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-bottom: 50px;
  overflow: hidden;
`;

const TravelDescription = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 600px;
  color: #fff;
  font-size: 20px;
  background: linear-gradient(
    to bottom,
    rgba(33, 36, 37, 0) 0%,
    rgba(33, 36, 37, 0.7) 50%,
    rgba(33, 36, 37, 0.84) 100%
  );
`;

const TravelImage = styled.img`
  max-width: 600px;
  height: auto;
`;

class Travel extends Component {
  render() {
    const { thumb, link = '', title = '' } = this.props;
    return (
      <Container>
        <TravelImage src={thumb} alt="" />

        <TravelDescription>
          <TravelLink to={link}>Title: {title}</TravelLink>
        </TravelDescription>
      </Container>
    );
  }
}

export default Travel;
