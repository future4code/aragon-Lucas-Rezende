const validaChavesDeObjetos = (obj) => {
  const prop = Object.keys(obj);
  const result = [];
  const response = {
    isError: false,
    errors: [],
  };
  for (let i = 0; i < prop.length - 1; i++) {
    {
      result.push(obj[prop[i]]);
    }
    if (typeof result[i] === "object") {
      response.isError = true;
      response.errors = [...response.errors, prop[i]];
    }
  }

  return response;
};

const objeto = { id: 1, name: null, email: null, email: null };
const objeto2 = { id: 1, name: "astrodev1", email: "astrodev@gmail.com" };
const objeto3 = {};

console.log(validaChavesDeObjetos(objeto));
console.log(validaChavesDeObjetos(objeto2));
console.log(validaChavesDeObjetos(objeto3));
