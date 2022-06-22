const generateMultipleTable = (num) => {
  const validateNum = Number(num);
  const table = [
    `${validateNum} x 1= ${validateNum * 1}`,
    `${validateNum} x 2= ${validateNum * 2}`,
    `${validateNum} x 3= ${validateNum * 3}`,
    `${validateNum} x 4= ${validateNum * 4}`,
    `${validateNum} x 5= ${validateNum * 5}`,
    `${validateNum} x 6= ${validateNum * 6}`,
    `${validateNum} x 4= ${validateNum * 7}`,
    `${validateNum} x 8= ${validateNum * 8}`,
    `${validateNum} x 9= ${validateNum * 9}`,
    `${validateNum} x 10= ${validateNum * 10}`,
  ];
  if (validateNum <= 10) {
    return table;
  } else
    return `Erro. Parâmetro inválido (${validateNum} precisa valer entre 1 e 10)`;
};

console.log(generateMultipleTable(5));
console.log(generateMultipleTable("5"));
console.log(generateMultipleTable(11));
