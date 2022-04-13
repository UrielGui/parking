import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        box-sizing: border-box;
        line-height: 1.5em;
      }
    ul {
      list-style-type: none;
    }
    button, a {
        cursor: pointer;
      }
    body {
      background: rgb(15, 30, 65);
      color: #fff;
      min-height: 100vh;
    }
`;

export const MainContainer = styled.div`
  width: 60%;
  background: #00000055;
  border-radius: 10px;
  min-height: 100vh;
  margin: auto;
  box-shadow: 0px 0px 27px 6px #000000c9;
`;

export const Container = styled.div`
  padding: 20px;
`;
