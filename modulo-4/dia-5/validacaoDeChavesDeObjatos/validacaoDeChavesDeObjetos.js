const validaChavesDeObjetos = (obj) => {
  const prop = Object.keys(obj);
  if (
    typeof obj[prop[0]] === "number" &&
    typeof obj[prop[1]] !== "object" &&
    typeof obj[prop[2]] !== "object"
  )
    return {
      isError: false,
      errors: [],
    };
  else if (
    typeof obj === "object" &&
    typeof obj[prop[1]] === "undefined" &&
    typeof obj[prop[2]] === "undefined"
  )
    return {
      isError: false,
      errors: [],
    };
  else if (
    typeof obj[prop[0]] !== "number" ||
    typeof obj[prop[1]] === "object" ||
    typeof obj[prop[2]] === "object"
  )
    return {
      isError: true,
      errors: [],
    };
};

const objeto = { id: 1, name: null, email: null };
const objeto2 = { id: 1, name: "astrodev1", email: "astrodev@gmail.com" };
const objeto3 = {};

console.log(validaChavesDeObjetos(objeto));
console.log(validaChavesDeObjetos(objeto2));
console.log(validaChavesDeObjetos(objeto3));
