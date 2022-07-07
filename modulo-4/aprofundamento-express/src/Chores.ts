//exercicio 2

export type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const chores: ToDo[] = [
  {
    userId: 1,
    id: 1,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
  },
  {
    userId: 2,
    id: 4,
    title: "suscipit repellat esse quibusdam voluptatem incidunt",
    completed: false,
  },
  {
    userId: 2,
    id: 5,
    title: "veritatis pariatur delectus",
    completed: true,
  },
  {
    userId: 2,
    id: 6,
    title: "nesciunt totam sit blanditiis sit",
    completed: false,
  },
  {
    userId: 2,
    id: 7,
    title: "laborum aut in quam",
    completed: false,
  },
  {
    userId: 3,
    id: 8,
    title: "velit soluta adipisci molestias reiciendis harum",
    completed: false,
  },
  {
    userId: 3,
    id: 9,
    title: "vel voluptatem repellat nihil placeat corporis",
    completed: false,
  },
  {
    userId: 3,
    id: 10,
    title: "nam qui rerum fugiat accusamus",
    completed: false,
  },
];
