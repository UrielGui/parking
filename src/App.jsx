import React, {useState} from 'react';
import * as Styled from './Styles/Globals';
import MenuContainer from './Components/MenuContainer';
import InputComponent from './Components/Input';
import OutputComponent from './Components/Output';

export default function App() {
  const [show, setShow] = useState('InputComponent');
  return (
    <div className="App">
      <Styled.MainContainer>
        <MenuContainer show={show} setShow={setShow} />
        <Styled.Container>
          {show === 'InputComponent' ? <InputComponent /> : <OutputComponent />}
        </Styled.Container>
      </Styled.MainContainer>
    </div>
  );
}