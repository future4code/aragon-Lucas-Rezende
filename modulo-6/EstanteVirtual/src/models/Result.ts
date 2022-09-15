export interface IResultsDB {
    position: number, 
    id: string,
    user_id: string,
    competition_id:string,
    value: number,
    unit: string
}


export class Result {
    constructor(
      private position:number,
      private id: string,
      private user_id: string,
      private competition_id:string,
      private value: number,
      private unit: string
    ) {}

    public getId = () => {
        return this.id
    }

    public getUser_id = () => {
        return this.user_id
    }


    public getCompetition_id = () => {
      return this.competition_id
  }


    public getValue = () => {
      return this.value
   }

    public getUnit = () => {
      return this.unit
   }

   public getPosition = () => {
    return this.position
 }


    public setId = (newId: string) => {
        this.id = newId
    }

    public setUser_id = (newUser_id: string) => {
        this.user_id = newUser_id
    }

    public setCompetition_id = (newCompetition_id: string) => {
      this.competition_id = newCompetition_id
  }



    public setValue = (newValue: number ) => {
      this.value = newValue
  }
    
    public setUnit = (newUnit: string ) => {
      this.unit = newUnit
  }

  public setPosition = (newPosition: string ) => {
    this.unit = newPosition
}

}

export interface IResultOutOutDTO{
  position:number,
  user_id: string,
  competition_id:string,
  value: number,
  unit: string
}

export interface ICreateResultInputDTO {
  token: string,
  user_id: string,
  competition_id: string,
  value: number,
  unit: string
}

export interface ICreateResultOutputDTO {
  message: string,
  result?: Result
}


export interface IGetResultInputDTO {
  competition_id: string, 
}   

export interface IGetResultsOutputDTO {
  result: Result[]
}
