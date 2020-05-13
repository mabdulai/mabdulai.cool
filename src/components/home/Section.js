import React, { Component } from "react";
import styled from "styled-components";
import { InnerContainer, DisplayFont } from "../common/CommonComponents";

const Container = styled(InnerContainer)`
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.side === "right" ? "flex-end" : "flex-start"};
  padding: 120px 0 40px;
`;
const Title = styled(DisplayFont)``;
const SubTitle = styled.div`
  background: ${({ theme }) => theme.tagLineBackground};
  font-size: 20px;
  padding: 10px 20px;
  text-transform: uppercase;
  border: 4px solid ${({ theme }) => theme.borderColor};
  font-weight: 900;
`;
const Content = styled.div``;

class Section extends Component {
  render() {
    const { title, subtitle, children, side } = this.props;
    return (
      <Container>
        <Header side={side}>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </Header>
        <Content>{children}</Content>
      </Container>
    );
  }
}

export default Section;
