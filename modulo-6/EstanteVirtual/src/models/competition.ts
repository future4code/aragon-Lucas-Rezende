export enum STATUS {
  DONE = "DONE",
  UNDONE = "UNDONE"
}

export enum COMPETITION {
  CEM_METROS = "100m",
  DARDO = "Dardo"
}

export interface ICompetitionDB {
  id: string,
  competition: COMPETITION,
  stage: string,
  status: STATUS
}


export class Competition {
  constructor(
    private id: string,
    private competition: COMPETITION,
    private stage: string,
    private status: STATUS
  ) {}

  public getId = () => {
      return this.id
  }

  public getCompetition = () => {
      return this.competition
  }


  public getStage = () => {
    return this.stage
 }

 public getStatus = () => {
  return this.status
}

  public setId = (newId: string) => {
      this.id = newId
  }

  public setCompetition = (newCompetition: COMPETITION) => {
      this.competition = newCompetition
  }


  public setStage = (newStage: string ) => {
    this.stage = newStage
}

public setStatus = (newStatus: STATUS ) => {
  this.status = newStatus
}
}

export interface ICreateCompetitionInputDTO {
  token:string,
  competition:COMPETITION,
  stage: string,
}

export interface ICreateCompetitionOutputDTO {
  message: string,
  competition: Competition
}

export interface IFinishCompetitionInputDTO {
  token:string,
  competition_id: string,
  status: string
}

export interface IFinishCompetitionOutputDTO {
  message: string
}