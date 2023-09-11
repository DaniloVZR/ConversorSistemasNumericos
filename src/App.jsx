import Conversor from "./Components/conversor";
import { useState } from "react";
import "./App.css";

function App() {
  const [from, setFrom] = useState("decimal");
  const [to, setTo] = useState("binario");

  return (
    <div className="main">
      <h1>Conversor de Sistemas Numéricos</h1>
      <div className="selectors">
        <select
          onChange={e => setFrom(e.target.value)}
        >
          <option value={"decimal"}>Decimal</option>
          <option value={"binario"}>Binario</option>
          <option value={"octal"}>Octal</option>
          <option value={"hexadecimal"}>Hexadecimal</option>
        </select>

        <i className="fa-sharp fa-solid fa-arrow-right fa-2x"></i>

        <select
          onChange={e => setTo(e.target.value)}
          defaultValue={"binario"}
        >
          <option value={"decimal"}>Decimal</option>
          <option value={"binario"}>Binario</option>
          <option value={"octal"}>Octal</option>
          <option value={"hexadecimal"}>Hexadecimal</option>
        </select>
      </div>

      <Conversor
        to={to}
        from={from}
      />
    </div>
  )
}

export default App
