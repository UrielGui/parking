import React, {useState} from 'react';
import { PlateInfo } from '../Contexts';

export default function GlobalStates({ children }) {
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentRecord, setPaymentRecord] = useState(null);
  const [paymentRecordStatus, setPaymentRecordStatus] = useState(null);
  const [paymentRecordErrorMsg, setPaymentRecordErrorMsg] = useState(null)
  const [exitRecord, setExitRecord] = useState(null);
  const [exitRecordStatus, setExitRecordStatus] = useState(null);
  const [exitRecordErrorMsg, setExitRecordErrorMsg] = useState(null)
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
          setPaymentRecordErrorMsg,
          exitRecordStatus,
          setExitRecordStatus,
          exitRecord,
          setExitRecord,
          exitRecordErrorMsg,
          setExitRecordErrorMsg
        }}
      >
        {children}
      </PlateInfo.Provider>
    </>
  );
}