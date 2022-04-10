import React, {useState, useEffect, useContext} from 'react';
import * as Styled from './Styled';
import ClipLoader from "react-spinners/ClipLoader";
import History from './History';
import PopUp from '../PopUp';
import { PaymentRecord } from '../../Services/PaymentRecord.service';
import { PlateInfo } from '../../Contexts';

export default function Output() {
  const [plate, setPlate] = useState();
  const [showOutput, setShowOutput] = useState(true);
  const [payment, setPayment] = useState(false);
  const [controller, setController] = useState(false);

  const { paymentRecord,
          setPaymentRecord,
          loading,
          setLoading,
          setPaymentRecordStatus,
          setPaymentRecordErrorMsg
        } = useContext(PlateInfo);

  useEffect(() => {
    if(paymentRecord && controller !== 1) {
      setController(1)
      return PaymentRecord(plate, setLoading, setPaymentRecordStatus, setPaymentRecordErrorMsg)
    }
  },[loading]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit(e) {
    e.preventDefault()
  }

  function Verification(set) {
    if(plate?.length > 0) {
      return set(true);
    }
  }
  
  return (
    <>
      {showOutput ?
        <>
          <Styled.Container>
          <form onSubmit={handleSubmit}>
              <div>
                <Styled.Input type="text" onChange={(e) => setPlate(e.target.value)} placeholder='Número da Placa' required />
              </div>
              <Styled.Button onClick={() => Verification(setPayment)}>{loading ? <ClipLoader color='fff' /> : 'Pagamento'}</Styled.Button>
              <Styled.Button type="submit">{loading ? <ClipLoader color='fff' /> : 'Confirmar Saída'}</Styled.Button>
            </form>
          </Styled.Container>
          <span onClick={() => setShowOutput(false)} style={{display: "block", textAlign: "center"}}>Consultar Histórico</span>
        </> :
        <>
          <History setShowOutput={setShowOutput} />
        </>}
        <PopUp
          info={payment ? 'Confirma o pagamento da placa abaixo?' : 'Confirma a saída do veículo da placa abaixo?'}
          successText={payment ? 'Pagamento Confirmado!' : 'Saída Liberada'}
          plate={plate}
          buttonText={'Confirmar'}
          confirmation={setPaymentRecord}
          open={payment}
          controller={setController}
          close={payment ? setPayment : ''}
        />
    </>
  );
}