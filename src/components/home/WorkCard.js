import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex: 0 0 710px;
  flex-wrap: wrap;
  height: 600px;
  background: ${({ theme }) => theme.workCardBackground};
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizeCardTitle};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  padding: 60px 50px;
  color: #fff;
`;
class WorkCard extends Component {
  render() {
    return (
      <Card>
        <Title>Jamstack</Title>
      </Card>
    );
  }
}

export default WorkCard;
