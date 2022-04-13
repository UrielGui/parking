import styled from "styled-components";

export const TopContainer = styled.div`
  background: rgb(27 52 111);
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const MenuContainerOption = styled.div`
  background: ${(props) => props.background};
  width: 50%;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  cursor: ${(props) => props.cursor};

  :hover {
    background: ${(props) => props.hover};
  }
`;
