import axios from "axios";

export function PlateNumberPost(
  plateNumber,
  setLoading,
  setReservation,
  setErrorOrSuccess,
  setErrorMsg
) {
  axios
    .post("https://parking-lot-to-pfz.herokuapp.com/parking", {
      plate: plateNumber
    })
    .then((response) => {
      setReservation(response.data.reservation);
      setErrorOrSuccess("success");
      setLoading(false);
    })
    .catch((error) => {
      setErrorOrSuccess("error");
      setLoading(false);
      if (error.response.data.errors.plate.find((e) => e === "is invalid")) {
        return setErrorMsg("Placa inválida!");
      } else if (
        error.response.data.errors.plate.find((e) => e === "already parked")
      ) {
        return setErrorMsg("Veículo já estacionado!");
      } else {
        return setErrorMsg("Serviço indisponível no momento!");
      }
    });
}
