import React, { Component } from "react";
import styled from "styled-components";
import { InnerContainer } from "./CommonComponents";

const Container = styled.header`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.navBackground};
  height: 500px;
  color: #fff;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 120px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.ochre};
`;

const SubTitle = styled(MainTitle)`
  color: #fff;

  > div {
    display: flex;
  }
`;

const TagLine = styled.div`
  background: ${({ theme }) => theme.tagLineBackground};
  display: inline-block;
  padding: 16px;
  color: #222;
  font-size: 50px;
  margin-left: 32px;
  border: 6px solid ${({ theme }) => theme.borderColor};
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <InnerContainer>
          <div>
            <MainTitle>Mabdulai.</MainTitle>
            <SubTitle>
              <SubTitle>Cool</SubTitle>
              <TagLine>FRONTEND - JAMSTACK - UI / UX</TagLine>
            </SubTitle>
          </div>
        </InnerContainer>
      </Container>
    );
  }
}

export default Header;
