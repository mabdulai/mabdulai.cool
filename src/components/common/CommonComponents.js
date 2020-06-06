import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex: 0 0 1440px;
  justify-content: center;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.navBackground};
  height: 100px;
  color: #fff;
`;

export const DisplayFont = styled.div`
  font-size: ${({ theme }) => theme.fontSizeDisplay};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  text-transform: uppercase;
`;

export const SubTitle = styled.div``;
