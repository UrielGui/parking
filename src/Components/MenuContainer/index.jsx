import React from "react";
import * as Styled from "./Styled";

export default function MenuContainer(props) {
  const { show, setShow } = props;
  return (
    <>
      <Styled.TopContainer>
        <Styled.Logo src="img/avatar_parking.png" alt="logo" />
      </Styled.TopContainer>
      <Styled.MenuContainer>
        <Styled.MenuContainerOption
          background={show === "InputComponent" ? "" : "#00b7ff"}
          hover={show === "InputComponent" ? "" : "rgb(44, 77, 148)"}
          cursor={show === "InputComponent" ? "" : "pointer"}
          onClick={() => setShow("InputComponent")}>
          Entrada
        </Styled.MenuContainerOption>
        <Styled.MenuContainerOption
          background={show === "OutputComponent" ? "" : "#673ab7"}
          hover={show === "OutputComponent" ? "" : "rgb(44, 77, 148)"}
          cursor={show === "OutputComponent" ? "" : "pointer"}
          onClick={() => setShow("OutputComponent")}>
          Saída
        </Styled.MenuContainerOption>
      </Styled.MenuContainer>
    </>
  );
}
