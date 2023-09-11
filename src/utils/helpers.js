// DECIMAL TO BINARY

export const decimalToBinary = (result) => {

  let array = [];

  while (result > 0) {
    array.push(result % 2)
    result = Math.floor(result / 2);
  }

  return array.reverse().join('');
};

// DECIMAL TO OCTAL

export const decimalToOctal = (result) => {
  let array = [];

  while (result > 0) {
    array.push(result % 8)
    result = Math.floor(result / 8);
  }

  return array.reverse().join('');
};

// DECIMAL TO HEXADECIMAL

export const decimalToHexadecimal = (result) => {
  let array = [];

  while (result > 0) {
    const remainder = result % 16;

    if (remainder >= 10) {
      array.push(String.fromCharCode(65 + remainder - 10));
    } else {
      array.push(remainder.toString())
    }

    result = Math.floor(result / 16);
  }

  return array.reverse().join('');
};

// BINARY TO DECIMAL

export const binaryToDecimal = (result) => {
  return parseInt(String(result), 2);
};

// BINARY TO OCTAL

export const binaryToOctal = (result) => {
  return decimalToOctal(binaryToDecimal(result))
};

// BINARY TO HEXADECIMAL

export const binaryToHexadecimal = (result) => {
  return decimalToHexadecimal(binaryToDecimal(result))
};

// OCTAL TO DECIMAL

export const octalToDecimal = (result) => {
  return parseInt(String(result), 8);
};

// OCTAL TO BINARY

export const octalToBinary = (result) => {
  return decimalToBinary(octalToDecimal(result))
};

// OCTAL TO HEXADECIMAL

export const octalToHexadecimal = (result) => {
  return decimalToHexadecimal(octalToDecimal(result))
};

// HEXADECIMAL TO DECIMAL

export const hexadecimalToDecimal = (result) => {
  return parseInt(String(result), 16);
};

// HEXADECIMAL TO BINARY

export const hexadecimalToBinary = (result) => {
  return decimalToBinary(hexadecimalToDecimal(result))
};

// HEXADECIMAL TO OCTAL

export const hexadecimalToOctal = (result) => {
  return decimalToOctal(hexadecimalToDecimal(result))
};