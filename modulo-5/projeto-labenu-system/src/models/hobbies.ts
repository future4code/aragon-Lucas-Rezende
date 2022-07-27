export type THobbie = {
  id: string,
  title:string
}

export class Hobbies {

  constructor(
      private id: string,
      private title: string,
  ) {}

  public getId() {
      return this.id
  }

  public getTitle() {
      return this.title
  }

  public setId(newId: string) {
      this.id = newId
  }

  public setTitle(newTitle: string) {
      this.title = newTitle
  }

}