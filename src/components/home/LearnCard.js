import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Card = styled(Link)`
  display: flex;
  flex: 0 1 345px;
  flex-wrap: nowrap;
  height: 600px;
  background: ${({ theme }) => theme.learnCardBackground};
  background-image: url(${(props) => props.background});
  margin-right: 20px;
  text-decoration: none;
  overflow: hidden;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizeCardTitle};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  padding: 50px 40px 0px;
  color: #fff;
`;

class LearnCard extends Component {
  render() {
    const {
      title = "Provide Title",
      link = "/post",
      background,
      delay,
    } = this.props;
    return (
      <Card background={background} to={link}>
        <Fade top delay={delay}>
          <Title>{title}</Title>
        </Fade>
      </Card>
    );
  }
}

export default LearnCard;
