import React, {useState} from 'react';
import { PlateInfo } from '../Contexts';

export default function GlobalStates({ children }) {
  const [reservation, setReservation] = useState('teste');
  return (
    <>
      <PlateInfo.Provider
        value={{
          reservation,
          setReservation
        }}
      >
        {children}
      </PlateInfo.Provider>
    </>
  );
}