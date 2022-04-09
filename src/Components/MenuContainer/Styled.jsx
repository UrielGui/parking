import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
`;

export const MenuContainerOption = styled.div`
  background: ${props => props.background};
  width: 50%;
  border-radius: ${props => props.borderRadius};
  padding: 20px;
  font-size: 20px;
  text-align: center;
  cursor: ${props => props.cursor};

  :hover {
    background: ${props => props.hover};
  }
`;