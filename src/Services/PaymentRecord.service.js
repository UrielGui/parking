import axios from "axios";

export function PaymentRecord(plateNumber, setLoading) {
  axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plateNumber}/pay`).then(() => {
      setLoading(false)
    }).catch((error) => {
      setLoading(false)
      if(error.response.status === 404) {
        return 'Pagamento já realizado anteriormente.'
      }
      else {
        return 'Serviço indisponível no momento!'
      }
    });
}