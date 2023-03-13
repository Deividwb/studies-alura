import React from "react";
import Botao from "./components/Botao";

//teste
function App() {
  return (
    <div className="App" onClick={() => alert("deu certo")}>
      <Botao />
    </div>
  );
}

export default App;
