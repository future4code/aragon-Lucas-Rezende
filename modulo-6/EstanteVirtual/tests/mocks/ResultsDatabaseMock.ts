import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IResultsDB, Result } from "../../src/models/Result";

export class ResultDatabaseMock extends BaseDatabase {
  public static TABLE_RESULTS = "Table_Results";

  public ResultDBModel = (result: Result) => {

  }

  public createResult = async (result: Result) => {

  }

  public findById = async (user_id: string): Promise<IResultsDB [] | undefined> => {
  
    return [
      {
        position: 0,
        id: "301",
        user_id: "102",
        competition_id: "201",
        value: 9.58,
        unit: "s",
      }
    ]

}

public getResults100metros = async (competition_id:string) : Promise<IResultsDB[] | undefined > => {
      
      return [
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
      ]

 }

 public getResultsDardos = async (competition_id:string) : Promise<IResultsDB[] | undefined > => {
      
  return [
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
  ]

}

}
