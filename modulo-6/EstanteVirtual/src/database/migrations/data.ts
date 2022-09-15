import { COMPETITION, ICompetitionDB, STATUS } from "../../models/competition";
import { IResultsDB } from "../../models/Result";
import { IUserDB, USER_ROLES } from "../../models/User";

export const users: IUserDB[] = [
  {
    id: "101",
    name: "Admin",
    email: "admin@gmail.com",
    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
    role: USER_ROLES.ADMIN
},
  {
    id: "102",
    name: "Usain Bolt",
    email: "bolt@gmail.com",
    password: "qwerty00",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "103",
    name: "Carl Lewis",
    email: "carl@gmail.com",
    password: "qwerty01",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "104",
    name: "Linford Christie",
    email: "linford@gmail.com",
    password: "qwerty02",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "105",
    name: "Maurice Greene",
    email: "greene@gmail.com",
    password: "qwerty03",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "106",
    name: "Kim Collins",
    email: "collins@gmail.com",
    password: "qwerty04",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "107",
    name: "Neeraj Chopra",
    email: "chopra@gmail.com",
    password: "qwerty05",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "108",
    name: "Johannes Vetter",
    email: "vetter@gmail.com",
    password: "qwerty06",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "109",
    name: "Lassi Etelatalo",
    email: "etelatalo@gmail.com",
    password: "qwerty07",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "110",
    name: "Alexandru Novac",
    email: "novac@gmail.com",
    password: "qwerty08",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "111",
    name: "Vitezslav Veselyc",
    email: "veselyc@gmail.com",
    password: "qwerty09",
    role: USER_ROLES.ATHLETE
  },
  {
    id: "112",
    name: "Pavel Mialeshka",
    email: "mialeshka@gmail.com",
    password: "qwerty10",
    role: USER_ROLES.ATHLETE
  }
];

export const competitions: ICompetitionDB[] = [
  {
    id: "201",
    competition: COMPETITION.CEM_METROS,
    stage: "classificação",
    status: STATUS.UNDONE,
  },
  {
    id: "202",
    competition: COMPETITION.DARDO,
    stage: "classificação",
    status: STATUS.UNDONE,
  }
];

export const results: IResultsDB[] = [
  {
    position: 0,
    id: "301",
    user_id: "102",
    competition_id: "201",
    value: 9.58,
    unit: "s",
  },
  {
    position: 0,
    id: "302",
    user_id: "103",
    competition_id: "201",
    value: 10.07,
    unit: "s",
  },
  {
    position: 0,
    id: "303",
    user_id: "104",
    competition_id: "201",
    value: 9.87,
    unit: "s",
  },
  {
    position: 0,
    id: "304",
    user_id: "105",
    competition_id: "201",
    value: 9.80,
    unit: "s",
  },
  {
    position: 0,
    id: "305",
    user_id: "106",
    competition_id: "201",
    value: 9.85,
    unit: "s",
  },
  {
    position: 0,
    id: "306",
    user_id: "107",
    competition_id: "202",
    value: 86.65,
    unit: "m",
  },
  {
    position: 0,
    id: "307",
    user_id: "108",
    competition_id: "202",
    value: 86.64,
    unit: "m",
  },
  {
    position: 0,
    id: "308",
    user_id: "109",
    competition_id: "202",
    value: 84.50,
    unit: "m",
  },
  {
    position: 0,
    id: "309",
    user_id: "110",
    competition_id: "202",
    value: 83.27,
    unit: "m",
  },
  {
    position: 0,
    id: "310",
    user_id: "111",
    competition_id: "202",
    value: 83.04,
    unit: "m",
  },
  {
    position: 0,
    id: "311",
    user_id: "112",
    competition_id: "202",
    value: 82.64,
    unit: "m",
  }
];
