const clients = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

const addNewClient = (client) => {
  const name = client.nome;
  const correctName = name.replace(/[^a-zA-Zs]/g, "");
  const position = clients.findIndex((item) => item.id === client.id);
  if (position < 0 && name === correctName) {
    const newList = [...clients, client];
    return newList;
  } else if (position >= 0 && name === correctName) {
    return `Erro. Parâmetro inválido (id ${client.id} já existe).`;
  } else position < 0 && name !== correctName;
  return `erro. Parametro inválido (nome ${name} possui caracteres especiaisk).`;
};

console.log(addNewClient({ id: 4, nome: "lucas" }));
console.log(addNewClient({ id: 5, nome: "lucas" }));
console.log(addNewClient({ id: 6, nome: "lucas*" }));
