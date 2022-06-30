const makeDateFrase = (yourName: string, birthDate: string): string => {
  return `Olá, me chamo ${yourName}, nasci no dia ${
    birthDate.split("/")[0]
  }, no mês de ${birthDate.split("/")[1]} e ano de ${birthDate.split("/")[2]}.`;
};

console.log(makeDateFrase("lucas", "26/abril/1990"));
