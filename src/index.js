import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import GraficaBarres from "./components/graficaBarres";

function App() {
  return (
    <div className="App">
      <GraficaBarres nomGrafica="Linear Graph" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
