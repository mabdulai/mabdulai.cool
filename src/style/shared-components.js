import styled from "styled-components";

export const MainText = styled.div`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontMain};
  font-weight: light;
  letter-spacing: 0.22px;
  line-height: 1.8;
  color: ${({ theme }) => theme.offWhite};
  margin: 60px 0;
  max-width: 70%;
  padding: 0 0 120px;
`;
