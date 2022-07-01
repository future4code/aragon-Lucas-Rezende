type Client = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const clientList: Client[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const currentClientBalanceList = (list: Client[]): Client[] => {
  const updateList = list.map((item: Client) => {
    let updateBalance = 0;

    for (let balance of item.debitos) {
      updateBalance -= balance;
    }

    const clientBalanceUpdate: Client = {
      cliente: item.cliente,
      saldoTotal: item.saldoTotal + updateBalance,
      debitos: [],
    };

    return clientBalanceUpdate;
  });
  const result: Client[] = updateList.filter((item: Client) => {
    return item.saldoTotal && item.saldoTotal < 0;
  });

  return result;
};

console.log(currentClientBalanceList(clientList));
