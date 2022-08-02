export type TProduct = {
    id: string,
    name: string,
    price: number
}

export class Product {
  constructor(
    private id:string,
    private name:string,
    private price:number
  ){
    this.id = id
    this.name = name
    this.price = price
  }
  getId(){
    return this.id
  }
  getName(){
    return this.name
  }
  getPrice(){
    return this.price
  }
  setId(newId:string){
    this.id=newId
  }
  setName(newName:string){
    this.id=newName
  }
  setPrice(newPrice:string){
    this.id=newPrice
  }
}