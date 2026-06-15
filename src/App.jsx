import { useState } from "react";

function App() {
  const [state, setState] =  useState("Ahmet")
  /* let customerName = 'Ahmet'; */

  function customerUpdate() {
    /* customerName = 'Emre'; */
    setState("Emre")
  }

  return (
    <div>
      <h1>Müşteri ismi: {state}</h1>
      <button onClick={customerUpdate}>İsmi Güncelle</button>
    </div>
  );
}

export default App;
