import axios from "axios";

export function ExitRecord(plateNumber, setLoading, setExitRecordStatus, setExitRecordErrorMsg) {
  axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plateNumber}/out`).then(() => {
      setExitRecordStatus('success')
      setLoading(false)
    }).catch((error) => {
      setExitRecordStatus('error')
      setLoading(false)
      if(error.response.data.errors.plate.find(e => e === "not paid")) {
        return setExitRecordErrorMsg('Necessário confirmar o pagamento primeiro!')
      }
      else if(error.response.data.errors.plate.find(e => e === "is invalid")) {
        return setExitRecordErrorMsg('Placa inválida!')
      }
      else {
        return setExitRecordErrorMsg('Placa não registrada ou veículo já estacionado!')
      }
    });
}