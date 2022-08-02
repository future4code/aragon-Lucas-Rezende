import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";
import { UserDatabase } from "./UserDatabase";

export class PurchaseDatabase extends BaseDatabase {
  public static TABLE = "Labe_Purchases"


  public async createPurchase(purchase:Purchase){
    await BaseDatabase
    .connection(PurchaseDatabase.TABLE)
    .insert({
      id: purchase.getId(),
      user_id: purchase.getUserId(),
      product_id: purchase.getProductId(),
      quantity: purchase.getQuantity(),
      total_price: purchase.getTotalPrice()
    })
}


  public async getPurchaseById(id:string){
        const [result] = await BaseDatabase.connection
        .raw(`
        SELECT
            ${UserDatabase.TABLE}.email,
            ${ProductDatabase.TABLE}.name AS product_name,
            ${ProductDatabase.TABLE}.price AS product_price,
            ${PurchaseDatabase.TABLE}.quantity AS product_quantity,
            ${PurchaseDatabase.TABLE}.total_price
        FROM ${PurchaseDatabase.TABLE}
        JOIN ${UserDatabase.TABLE}
        ON ${PurchaseDatabase.TABLE}.user_id = ${UserDatabase.TABLE}.id
        JOIN ${ProductDatabase.TABLE}
        ON ${PurchaseDatabase.TABLE}.product_id = ${ProductDatabase.TABLE}.id
        WHERE ${PurchaseDatabase.TABLE}.user_id = ${id} ;
         `)
 
     return result
 }

}