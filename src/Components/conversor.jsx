import { useState } from "react";
import {
  decimalToBinary,
  decimalToOctal,
  decimalToHexadecimal,
  binaryToDecimal,
  binaryToOctal,
  binaryToHexadecimal,
  octalToDecimal,
  octalToBinary,
  octalToHexadecimal,
  hexadecimalToDecimal,
  hexadecimalToBinary,
  hexadecimalToOctal
} from "../utils/helpers";
import "../styles/conversor.css";

const conversor = ({ to, from }) => {

  const [number, setNumber] = useState(0)

  const Convertir = (e) => {
    e.preventDefault();

    const conversiones = {
      'decimal->binario': decimalToBinary,
      'decimal->octal': decimalToOctal,
      'decimal->hexadecimal': decimalToHexadecimal,
      'binario->decimal': binaryToDecimal,
      'binario->octal': binaryToOctal,
      'binario->hexadecimal': binaryToHexadecimal,
      'octal->decimal': octalToDecimal,
      'octal->binario': octalToBinary,
      'octal->hexadecimal': octalToHexadecimal,
      'hexadecimal->decimal': hexadecimalToDecimal,
      'hexadecimal->binario': hexadecimalToBinary,
      'hexadecimal->octal': hexadecimalToOctal,
    };

    const conversionKey = `${from}->${to}`;

    if (conversiones.hasOwnProperty(conversionKey)) {
      const conversionFunction = conversiones[conversionKey];
      setNumber(conversionFunction(number));
    }
  }

  return (
    <div className="container">
      <form>
        <input
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={Convertir}>Convertir</button>
      </form>
      <h2 className="numero">
        {number ? number : "- - -"}
      </h2>
    </div>
  );
};

export default conversor;