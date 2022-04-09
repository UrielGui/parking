import React, {useState} from 'react';
import axios from "axios";
import * as Styled from './Styled';
import ClipLoader from "react-spinners/ClipLoader";
import History from './History';
import PopUp from '../PopUp';

export default function Output() {
  const [plate, setPlate] = useState();
  const [reservation, setReservation] = useState();
  const [errorMSg, setErrorMsg] = useState();
  const [errorOrSuccess, setErrorOrSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault()
    setErrorOrSuccess(null);
    setLoading(true)
    return plateNumberPost(plate)
  }

  function plateNumberPost(plateNumber) {
    axios.post('https://parking-lot-to-pfz.herokuapp.com/parking', {
      plate: plateNumber
    }).then((response) => {
        setReservation(response.data.reservation)
        setErrorOrSuccess('success')
        setLoading(false)
      }).catch((error) => {
        setErrorOrSuccess('error')
        setLoading(false)
        if(error.response.data.errors.plate.find(e => e === "is invalid")) {
          return setErrorMsg('Placa inválida!')
        }
        else if(error.response.data.errors.plate.find(e => e === "already parked")) {
          return setErrorMsg('Veículo já estacionado!')
        }
        else {
          return setErrorMsg('Serviço indisponível no momento!')
        }
      });
  }

  function SuccessOrError({color}) {
    return(
      <Styled.SuccessOrError color={color}>
        {errorOrSuccess === 'success' ?
        <>
          <h4>Veículo registrado com sucesso!</h4>
          <p>Placa do veículo registrado: <span>{plate}</span></p>
          <p>Código de reserva: <span>{reservation}</span></p>
        </> 
        : <h4>{errorMSg}</h4>}
      </Styled.SuccessOrError>
    )
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
              <Styled.Button type="submit">{loading ? <ClipLoader color='fff' /> : 'Pagamento'}</Styled.Button>
              <Styled.Button type="submit">{loading ? <ClipLoader color='fff' /> : 'Confirmar Saída'}</Styled.Button>
            </form>
          </Styled.Container>
          <span onClick={() => setShowOutput(false)} style={{display: "block", textAlign: "center"}}>Consultar Histórico</span>
          {errorOrSuccess === 'success' ? <SuccessOrError color='#17cc92' /> : 
          <SuccessOrError color='#d81d36' />}
        </> :
        <>
          <History setShowOutput={setShowOutput} />
        </>}
        <PopUp 
          info={'Informações'}
          sucesso={'PAGO!'}
        />
    </>
  );
}