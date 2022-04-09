import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  &::-webkit-input-placeholder {
    color: "red";
  }
`;

export const Input = styled.input`
  font-size: 30px;
  border-radius: 5px 5px 0 0;
  padding: 5px 10px;
  background: rgb(65 181 226 / 71%);
  color: #fff;

  ::-webkit-input-placeholder {
    color: #ffffff65;
}
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 0 0 5px 5px;
  font-size: 30px;
  padding: 5px 10px;
  color: #fff;
  background: #00b7ff;
  font-weight: medium;

  :hover {
    background: #ffffff1c
  }
`;

export const SuccessOrError = styled.div`
  margin-top: 20px;
  text-align:  center;

  h4 {
    margin-bottom: 10px;
    color: ${props => props.color};
  }

  span {
    color: #00b7ff;
  }
`;

