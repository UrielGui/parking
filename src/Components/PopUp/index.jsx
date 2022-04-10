import React, { useContext } from 'react';
import * as Styled from './Styled'
import { PlateInfo } from '../../Contexts';
import { CgCheckR } from 'react-icons/cg';
import ClipLoader from "react-spinners/ClipLoader";

export default function PopUp(props) {
  const { loading,
          setLoading,
          paymentRecordStatus,
          setPaymentRecordStatus,
          paymentRecordErrorMsg
        } = useContext(PlateInfo);

  function Confirmation() {
    props.controller(2)
    setPaymentRecordStatus(false)
    setLoading(true);
    return props.confirmation(true)
  }

  function LoadingComponent() {
    return (
      <Styled.LoadingIcon>
        <ClipLoader color='fff' size='80' />
      </Styled.LoadingIcon>
    )
  }

  function backButton() {
    setPaymentRecordStatus(false)
    return props.close(false)
  }

  function ErrorMsg() {
    return (
      <>
        <Styled.ErrorMsg>{paymentRecordErrorMsg}</Styled.ErrorMsg>
      </>
    )
  }

  function Info() {
    return (
      <>
        <Styled.Container open={props.open}>
          <Styled.Box>
            <Styled.Close onClick={() => backButton()}>X</Styled.Close>
            {loading ? <LoadingComponent /> : 
              <>
                {paymentRecordStatus === 'success' 
                  ? 
                    <Styled.ContainerConfirmation>
                      <Styled.Icon><CgCheckR /></Styled.Icon>
                      <h2>{props.successText}</h2>
                      <Styled.BackButton onClick={() => backButton()}>Voltar</Styled.BackButton>
                    </Styled.ContainerConfirmation> 
                  : 
                    <>
                      <h2>{props.info}</h2>
                      <h3>{props.plate}</h3>
                      <Styled.OK onClick={() => Confirmation()}>{props.buttonText}</Styled.OK>
                      {paymentRecordStatus === 'error' && <ErrorMsg />}
                      <Styled.BackButton onClick={() => backButton()}>Cancelar</Styled.BackButton>
                    </>
                  }
              </>
            }
          </Styled.Box>
        </Styled.Container>
      </>
    )
  }

  return (
    <>
      {props.open ? <Info /> : ''}
    </>
  );
}