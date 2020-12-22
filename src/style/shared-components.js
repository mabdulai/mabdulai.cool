import styled from "styled-components";

export const MainText = styled.div`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontMain};
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.6;
  color: ${({ theme }) => theme.offWhite};
  margin: 60px 0;
  max-width: 70%;
  padding: 0 0 120px;
  opacity: 0.9;
  text-align: justify;

  @media (max-width: 1200px) {
    max-width: 100%;
    font-size: 20px;
  }
`;
