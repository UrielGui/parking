import React, { useContext, useEffect } from "react";
import * as Styled from "./Styled";
import { PlateInfo } from "../../Contexts";
import { CgCheckR } from "react-icons/cg";
import ClipLoader from "react-spinners/ClipLoader";

export default function PopUp(props) {
  const {
    loading,
    setLoading,
    paymentRecordStatus,
    setPaymentRecord,
    setPaymentRecordStatus,
    paymentRecordErrorMsg,
    exitRecordErrorMsg,
    exitRecordStatus,
    setExitRecordStatus
  } = useContext(PlateInfo);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) backButton();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  function Confirmation() {
    props.controller(2);
    if (props.identifier === "payment") {
      setPaymentRecord(false);
    } else {
      setExitRecordStatus(false);
    }
    setLoading(true);
    return props.confirmation(true);
  }

  function LoadingComponent() {
    return (
      <Styled.LoadingIcon>
        <ClipLoader color="fff" size="80" />
      </Styled.LoadingIcon>
    );
  }

  function backButton() {
    props.setPlate(null);
    if (props.identifier === "payment") {
      setPaymentRecordStatus(false);
    } else {
      setExitRecordStatus(false);
    }
    return props.close(false);
  }

  function ErrorMsg() {
    return (
      <>
        <Styled.ErrorMsg>
          {props.identifier === "payment"
            ? paymentRecordErrorMsg
            : exitRecordErrorMsg}
        </Styled.ErrorMsg>
      </>
    );
  }

  function Info() {
    return (
      <>
        <Styled.Container open={props.open}>
          <Styled.Box>
            <Styled.Close onClick={() => backButton()}>X</Styled.Close>
            {loading ? (
              <LoadingComponent />
            ) : (
              <>
                {paymentRecordStatus === "success" ||
                exitRecordStatus === "success" ? (
                  <Styled.ContainerConfirmation>
                    <Styled.Icon>
                      <CgCheckR />
                    </Styled.Icon>
                    <h2>{props.successText}</h2>
                    <Styled.BackButton onClick={() => backButton()}>
                      Voltar
                    </Styled.BackButton>
                  </Styled.ContainerConfirmation>
                ) : (
                  <>
                    <h2>{props.info}</h2>
                    <h3>{props.plate}</h3>
                    <Styled.OK onClick={() => Confirmation()}>
                      {props.buttonText}
                    </Styled.OK>
                    {paymentRecordStatus === "error" ||
                    exitRecordStatus === "error" ? (
                      <ErrorMsg />
                    ) : (
                      ""
                    )}
                    <Styled.BackButton onClick={() => backButton()}>
                      Cancelar
                    </Styled.BackButton>
                  </>
                )}
              </>
            )}
          </Styled.Box>
        </Styled.Container>
      </>
    );
  }

  return (
    <>
      <Info />
    </>
  );
}
