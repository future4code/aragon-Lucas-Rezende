const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const operation = (sinal) => {
  switch (sinal) {
    case "add":
      console.log(num1 + num2);
      break;
    case "sub":
      console.log(num1 - num2);
      break;
    case "multi":
      console.log(num1 * num2);
      break;
    case "div":
      console.log(num1 / num2);
      break;
  }
};

operation(process.argv[2]);
