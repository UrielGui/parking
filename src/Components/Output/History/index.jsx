import React from 'react';

export default function History(props) {
  return (
    <>
      <h1>History</h1>
      <button onClick={() => props.setShowOutput(true)}>Teste</button>
    </>
  );
}