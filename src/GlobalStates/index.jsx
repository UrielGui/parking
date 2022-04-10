import React, {useState} from 'react';
import { PlateInfo } from '../Contexts';

export default function GlobalStates({ children }) {
  const [reservation, setReservation] = useState(null);
  const [paymentRecord, setPaymentRecord] = useState(null);
  const [paymentRecordStatus, setPaymentRecordStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentRecordErrorMsg, setPaymentRecordErrorMsg] = useState(null)
  return (
    <>
      <PlateInfo.Provider
        value={{
          reservation,
          setReservation,
          paymentRecord,
          setPaymentRecord,
          loading,
          setLoading,
          paymentRecordStatus,
          setPaymentRecordStatus,
          paymentRecordErrorMsg,
          setPaymentRecordErrorMsg
        }}
      >
        {children}
      </PlateInfo.Provider>
    </>
  );
}