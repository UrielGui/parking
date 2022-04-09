import React from 'react';
import * as Styled from './Styled';

export default function MenuContainer(props) {
  const { show, setShow } = props;
  return (
    <>
      <Styled.MenuContainer>
        <Styled.MenuContainerOption
          background={show === 'InputComponent' ? '' : '#00b7ff'} 
          hover={show === 'InputComponent' ? '' : 'rgb(44, 77, 148)'}
          cursor={show === 'InputComponent' ? '' : 'pointer'}
          borderRadius={'10px 0px 0px 0px'}
          onClick={() => setShow('InputComponent')}
        >
          Entrada
        </Styled.MenuContainerOption>
        <Styled.MenuContainerOption 
          background={show === 'OutputComponent' ? '' : '#ff00c8'} 
          hover={show === 'OutputComponent' ? '' : 'rgb(44, 77, 148)'}
          cursor={show === 'OutputComponent' ? '' : 'pointer'}
          borderRadius={'0px 10px 0px 0px'}
          onClick={() => setShow('OutputComponent')}
        >
          Saída
        </Styled.MenuContainerOption>
      </Styled.MenuContainer> 
    </>
  );
}