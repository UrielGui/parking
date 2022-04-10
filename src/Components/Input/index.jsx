import React, {useState, useContext} from 'react';
import * as Styled from './Styled';
import ClipLoader from "react-spinners/ClipLoader";
import { PlateNumberPost } from '../../Services/PlateNumberPost.service';
import { PlateInfo } from '../../Contexts';

export default function Input() {
  const [plate, setPlate] = useState();
  const [errorMSg, setErrorMsg] = useState();
  const [errorOrSuccess, setErrorOrSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const { reservation, setReservation } = useContext(PlateInfo);

  function handleSubmit(e) {
    e.preventDefault()
    setErrorOrSuccess(null);
    setLoading(true)
    return PlateNumberPost(plate, setLoading, setReservation, setErrorOrSuccess, setErrorMsg)
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
      <Styled.Container>
        <form onSubmit={handleSubmit}>
          <div>
            <Styled.Input type="text" onChange={(e) => setPlate(e.target.value)} placeholder='Número da Placa' required />
          </div>
          <Styled.Button type="submit">{loading ? <ClipLoader color='fff' /> : 'Confirmar Entrada'}</Styled.Button>
        </form>
      </Styled.Container>
      {errorOrSuccess === 'success' ? <SuccessOrError color='#17cc92' /> : 
      <SuccessOrError color='#d81d36' />}
    </>
  );
}