import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <Content>
        <Wow>
          <Full>GET IN</Full>
          <Border>TOUCH</Border>
        </Wow>
        <Nav>
          <Links>
            <Link href="https://www.twitter.com/mabdulai90">TWITTER</Link>
            <Link href="https://www.linkedin.com/michaelabdulai">LINKEDIN</Link>
            <Link href="https://www.instagram.com/mabdulai90">INSTAGRAM</Link>
            <Link href="https://www.github.com/mabdulai">GITHUB</Link>
          </Links>
          <Mail href="mailto:mabdulai90@gmail.com">MABDULAI90@GMAIL.COM</Mail>
        </Nav>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 24px solid ${({ theme }) => theme.ochre};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  border-top: 10px solid ${({ theme }) => theme.ochre};
  max-width: ${({ theme }) => theme.layoutMaxWidth};
  width: 100%;
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;

const Wow = styled.div`
  font-size: 150px;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: 900;
  text-align: right;
  line-height: 0.75;
  color: ${({ theme }) => theme.ochre};
  transition: all 100ms ease-in-out;
  cursor: default;

  &:hover {
    color: #fff;
    border-color: #fff;
  }
`;

const Full = styled.div``;

const Border = styled.div`
  color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.ochre};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
  a {
    font-family: ${({ theme }) => theme.fontNav};
    font-size: 20px;
    color: ${({ theme }) => theme.ochre};
    text-decoration: none;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    max-width: 90%;
  }
`;

const Mail = styled.a``;

const Links = styled.ul``;

const Link = styled.a`
  margin-right: 50px;
`;
