import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";

export const getPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const id = req.params.user_id

        const [result] = await connection.raw(`
        SELECT
        ${TABLE_USERS}.id,
        ${TABLE_USERS}.email,
        ${TABLE_PRODUCTS}.name,
        ${TABLE_PRODUCTS}.price,
        ${TABLE_PURCHASES}.quantity,
        ${TABLE_PRODUCTS}.price *  ${TABLE_PURCHASES}.quantity as totalprice 
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE user_id LIKE ${id};
 `)


        res.status(200).send({ purchases: result })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  