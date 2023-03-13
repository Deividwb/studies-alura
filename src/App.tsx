import React from "react";
import Botao from "./components/Botao";

//teste
function App() {
  return (
    <div className="App" onClick={() => alert("deu certo")}>
      <Botao />
      <h1>OIIII</h1>
    </div>
  );
}

export default App;
