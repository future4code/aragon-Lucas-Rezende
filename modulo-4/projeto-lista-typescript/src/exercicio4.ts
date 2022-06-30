enum SECTION {
  MARKETING = "maketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

const employees: Employee[] = [
  { nome: "Marcos", salário: 2500, setor: SECTION.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SECTION.VENDAS, presencial: false },
  {
    nome: "Salete",
    salário: 2200,
    setor: SECTION.FINANCEIRO,
    presencial: true,
  },
  { nome: "João", salário: 2800, setor: SECTION.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SECTION.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SECTION.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SECTION.MARKETING, presencial: true },
];

type Employee = {
  nome: string;
  salário: number;
  setor: SECTION;
  presencial: boolean;
};

const filterEmployees = (employees: Employee[]): object[] => {
  return employees.filter((employee) => {
    return employee.setor === SECTION.MARKETING && employee.presencial === true;
  });
};

console.log(filterEmployees(employees));
