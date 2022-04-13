import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  @media only screen and (max-width: 345px) {
    padding: 5px;
  }
`;

export const PlateTitle = styled.div`
  display: flex;

  @media only screen and (max-width: 345px) {
    h2 {
      font-size: 15px;
    }
  }
`;

export const BackIcon = styled.span`
  font-size: 40px;
  margin-right: 10px;
  position: relative;
  top: -4px;
  cursor: pointer;
  @media only screen and (max-width: 345px) {
    font-size: 20px;
  }
`;

export const UlStyled = styled.ul`
  border: 2px solid #00b7ff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;

  li {
    padding: 5px;
  }

  @media only screen and (max-width: 345px) {
    font-size: 15px;
    li {
      padding: 2px;
    }
  }
`;

export const NextIcon = styled.span`
  font-size: 30px;
  position: relative;
  top: 10px;
  cursor: pointer;
`;

export const Loading = styled.span`
  display: block;
  text-align: center;
`;

export const ErrorMsg = styled.h2`
  color: #ff5f74;
`;

export const DetailsInfo = styled.ul`
  display: flex;
  flex-direction: column;

  span {
    color: #00b7ff;
  }

  h4 {
    margin-bottom: 10px;
  }
`;
