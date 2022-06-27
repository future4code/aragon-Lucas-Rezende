const workList = ["comprar leite"];

const addWork = (tarefa) => {
  const newWorkList = [...workList, tarefa];
  console.log("Tarefa adicionada com sucesso!");
  return newWorkList;
};

console.log(addWork(process.argv[2]));
