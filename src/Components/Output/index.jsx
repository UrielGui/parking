import React, { useState, useEffect, useContext } from "react";
import * as Styled from "./Styled";
import ClipLoader from "react-spinners/ClipLoader";
import History from "./History";
import PopUp from "../PopUp";
import { PlateInfo } from "../../Contexts";
import { PaymentRecord } from "../../Services/PaymentRecord.service";
import { ExitRecord } from "../../Services/ExitRecord.service";

export default function Output() {
  const [plate, setPlate] = useState();
  const [showOutput, setShowOutput] = useState(true);
  const [payment, setPayment] = useState(false);
  const [exit, setExit] = useState(false);
  const [controller, setController] = useState(false);

  const {
    paymentRecord,
    setPaymentRecord,
    loading,
    setLoading,
    setPaymentRecordStatus,
    setPaymentRecordErrorMsg,
    exitRecord,
    setExitRecord,
    setExitRecordStatus,
    setExitRecordErrorMsg
  } = useContext(PlateInfo);

  if (plate === null) {
    document.getElementById("plate").value = "";
  }

  useEffect(() => {
    if (paymentRecord && controller !== 1) {
      setController(1);
      setPaymentRecord(false);
      return PaymentRecord(
        plate,
        setLoading,
        setPaymentRecordStatus,
        setPaymentRecordErrorMsg
      );
    } else if (exitRecord && controller !== 1) {
      setController(1);
      setExitRecord(false);
      return ExitRecord(
        plate,
        setLoading,
        setExitRecordStatus,
        setExitRecordErrorMsg
      );
    }
  }, [loading]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function Verification(set) {
    if (plate?.length > 0) {
      return set(true);
    }
  }

  function OpenHistory() {
    if (plate.length > 0) {
      setShowOutput(false);
    }
  }

  return (
    <>
      {showOutput ? (
        <>
          <Styled.Container>
            <form onSubmit={handleSubmit}>
              <div>
                <Styled.Input
                  id="plate"
                  type="text"
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="Número da Placa"
                  required
                />
              </div>
              <Styled.Button
                background="#00b7ff"
                onClick={() => Verification(setPayment)}>
                {loading ? <ClipLoader color="fff" /> : "Confirmar Pagamento"}
              </Styled.Button>
              <Styled.Button
                background="#673ab7"
                onClick={() => Verification(setExit)}>
                {loading ? <ClipLoader color="fff" /> : "Confirmar Saída"}
              </Styled.Button>
              <Styled.Button
                background="#1b346f"
                onClick={() => OpenHistory()}
                style={{ display: "block", borderRadius: "0 0 5px 5px" }}>
                Consultar Histórico
              </Styled.Button>
            </form>
          </Styled.Container>
        </>
      ) : (
        <>
          <History
            setShowOutput={setShowOutput}
            plate={plate}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
      <PopUp
        info={
          payment
            ? "Confirma o pagamento da placa abaixo?"
            : "Confirma a saída do veículo da placa abaixo?"
        }
        successText={payment ? "Pagamento Confirmado!" : "Saída Confirmada!"}
        plate={plate}
        setPlate={setPlate}
        identifier={payment ? "payment" : "exit"}
        buttonText={"Confirmar"}
        confirmation={payment ? setPaymentRecord : setExitRecord}
        open={payment ? payment : exit}
        controller={setController}
        close={payment ? setPayment : setExit}
      />
    </>
  );
}
