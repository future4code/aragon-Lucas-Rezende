// type para tipar no typescript com camelCase
export type TPurchase = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}

// type para tipar no banco de dados com snake_case
// export type PurchaseDB = {
//     id: string,
//     user_id: string,
//     product_id: string,
//     quantity: number,
//     total_price: number
// }

export class Purchase {
  constructor(
    private id:string,
    private userId:string,
    private productId:string,
    private quantity:number,
    private totalPrice:number
  ) {
    this.id = id
    this.userId = userId
    this.productId = productId
    this.quantity = quantity
    this.totalPrice = totalPrice
  }
  getId(){
    return this.id
  }
  getUserId(){
    return this.userId
  }
  getProductId(){
    return this.productId
  }
  getQuantity(){
    return this.quantity
  }
  getTotalPrice(){
    return this.totalPrice
  }
}