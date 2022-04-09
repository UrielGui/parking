import React, { useState } from 'react';

export default function PopUp(props) {
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  function Info() {
    return (
      <>
        {showConfirmation 
          ?
          <h1>Confirmação</h1>
          : 
          <span>{props.info}</span>
        }
      </>
    )
  }

  return (
    <>
      {loading 
        ? 'loading'
        : 
          <>
            <Info />
          </>
      }
    </>
  );
}