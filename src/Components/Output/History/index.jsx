import React, { useState, useEffect } from "react";
import * as Styled from "./Styled";
import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { PlateHistory } from "../../../Services/PlateHistory.service";
import ClipLoader from "react-spinners/ClipLoader";

export default function History(props) {
  const { plate, loading, setLoading } = props;
  const [plateHistory, setPlateHistory] = useState(null);
  const [plateHistoryErrorMsg, setPlateHistoryErrorMsg] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [historyDetails, setHistoryDetails] = useState();

  function getPlateInfo() {
    setLoading(true);
    return PlateHistory(
      plate,
      setPlateHistory,
      setLoading,
      setPlateHistoryErrorMsg
    );
  }

  function backOption() {
    if (!showDetails) {
      props.setShowOutput(true);
    } else {
      setShowDetails(false);
    }
  }

  function HistoryDetails(e) {
    setHistoryDetails(e);
    setShowDetails(true);
  }

  function ShowDetailsInfo() {
    return (
      <Styled.DetailsInfo>
        <h4>Todos os Detalhes:</h4>
        <li>
          Situação:{" "}
          <span>{historyDetails.left ? "Não Estacionado" : "Estacionado"}</span>
        </li>
        <li>
          Tempo Estacionado: <span>{historyDetails.time}</span>
        </li>
        <li>
          Pagamento:{" "}
          <span>{historyDetails.paid ? "Confirmado" : "Não Confirmado"}</span>
        </li>
        <li>
          Código de Reserva: <span>{historyDetails.reservation}</span>
        </li>
      </Styled.DetailsInfo>
    );
  }

  function HistoryOrDetails() {
    return (
      <>
        <Styled.PlateTitle>
          <Styled.BackIcon onClick={() => backOption()}>
            <BiArrowBack />
          </Styled.BackIcon>
          <h2>Placa {plate}</h2>
        </Styled.PlateTitle>
        {!showDetails ? (
          <>
            {plateHistoryErrorMsg ? (
              <Styled.ErrorMsg>{plateHistoryErrorMsg}</Styled.ErrorMsg>
            ) : (
              <>
                {plateHistory?.map((e) => {
                  return (
                    <Styled.UlStyled key={e.time}>
                      <li>
                        Status de Pagamento:{" "}
                        {e.paid
                          ? "Pagamento Confirmado"
                          : "Pagamento não Confirmado"}
                      </li>
                      <li>Tempo Total: {e.time}</li>
                      <li>
                        Mais Detalhes:{" "}
                        <Styled.NextIcon onClick={() => HistoryDetails(e)}>
                          <BiRightArrowAlt />
                        </Styled.NextIcon>
                      </li>
                    </Styled.UlStyled>
                  );
                })}
              </>
            )}
          </>
        ) : (
          <ShowDetailsInfo />
        )}
      </>
    );
  }

  const once = "";

  useEffect(() => {
    getPlateInfo();
  }, [once]);

  return (
    <Styled.Container>
      {loading ? (
        <Styled.Loading>
          <ClipLoader color="fff" />
        </Styled.Loading>
      ) : (
        <HistoryOrDetails />
      )}
    </Styled.Container>
  );
}
