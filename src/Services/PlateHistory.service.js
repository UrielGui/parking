import axios from "axios";

export function PlateHistory(
  plateNumber,
  setPlateHistory,
  setLoading,
  setPlateHistoryErrorMsg
) {
  axios
    .get(`https://parking-lot-to-pfz.herokuapp.com/parking/${plateNumber}`)
    .then((res) => {
      setLoading(false);
      setPlateHistory(res.data);
    })
    .catch((error) => {
      setLoading(false);
      if (error === []) {
        return setPlateHistoryErrorMsg("Placa não encontrada!");
      } else {
        return setPlateHistoryErrorMsg("Placa inválida!");
      }
    });
}
