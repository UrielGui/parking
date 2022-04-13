import axios from "axios";

export function PaymentRecord(
  plateNumber,
  setLoading,
  setPaymentRecordStatus,
  setPaymentRecordErrorMsg
) {
  axios
    .post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plateNumber}/pay`)
    .then(() => {
      setPaymentRecordStatus("success");
      setLoading(false);
    })
    .catch((error) => {
      setPaymentRecordStatus("error");
      setLoading(false);
      if (error.response.status === 404) {
        return setPaymentRecordErrorMsg(
          "Placa inválida ou já paga anteriormente!"
        );
      } else {
        return setPaymentRecordErrorMsg("Placa inválida!");
      }
    });
}
