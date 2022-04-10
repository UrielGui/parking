import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #06060669;
  left: 0;
  top: 0;
  position: fixed;
  text-align: -webkit-center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 70%;
  border-radius: 5px;
  background: #18294e;
  box-shadow: 0px 0px 27px 6px #000000c9;
  padding: 50px;

  h3 {
    color: #00b7ff;
    border: 2px solid #00b7ff;
    padding: 10px 0;
    margin: 20px 0;
    border-radius: 5px;
  }
`

export const Close = styled.button`
  place-self: self-end;
  position: relative;
  top: -40px;
  left: 40px;
  background: none;
  color: #fff;
  font-size: 18px;

  :hover {
    opacity: 0.5;
  }
`

export const OK = styled.button`
  padding: 10px 0px;
  font-size: 20px;
  background: #13ce60;
  color: #fff;
  border-radius: 5px;

  :hover {
    background: #fff;
    color: #333;
  }
`
export const BackButton = styled.a`
  padding: 10px 0px;
  color: #fff;
  font-size: 14px;
  margin-top: 60px;
`

export const ErrorMsg = styled.span`
  margin-top: 10px;
  color: #ff5f74;
`

export const Icon = styled.span`
  font-size: 60px;
`

export const ContainerConfirmation = styled.div`
  display: block;

  h2 {
    margin-bottom: 120px;
  }
`

export const LoadingIcon = styled.div`
  
`