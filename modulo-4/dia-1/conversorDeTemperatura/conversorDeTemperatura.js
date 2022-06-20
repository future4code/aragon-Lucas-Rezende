const convertTemperature = (celsius, convert) => {
  let validaCelsius = Number(celsius);
  let validaConverte = convert.toUpperCase();
  let far = validaCelsius * (9 / 5) + 32;
  let kel = validaCelsius + 283.15;
  if (validaCelsius > -9999 && validaConverte === "F")
    return console.log(
      `${validaCelsius}° celsius é equivalente a ${far}° Farenheit`
    );
  else if (validaCelsius > -9999 && validaConverte === "K")
    return console.log(
      `${validaCelsius}° celsius é equivalente a ${kel} Kelvin`
    );
  else if (isNaN(celsius) === true)
    return console.log(`Erro. Parâmetro inválido (${celsius}).`);
  else validaConverte !== "F" || validaConverte !== "K";

  return console.log(`Erro. Parâmetro inválido (${convert}).`);
};

convertTemperature("10", "k");
convertTemperature("10", "f");
convertTemperature("dez", "f");
convertTemperature("10", "G");
