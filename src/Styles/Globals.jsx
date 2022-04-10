import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        box-sizing: border-box;
        line-height: 1.5em;
      }
    button, a {
        cursor: pointer;
      }
    body {
      background: rgb(15, 30, 65);
      color: #fff;
    }
`;

export const MainContainer = styled.div`
  max-width: 60%;
  margin: 50px auto;
  background: #00000055;
  border-radius: 10px;
  height: 500px;
`;

export const Container = styled.div`
  padding: 20px;
`;