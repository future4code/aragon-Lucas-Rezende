import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const getPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search = req.query.perfume
        const sort = req.query.sort || "price"
        const order = req.query.order || "asc"
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)



        if (search) {
            // const [ result ] = await connection
            //     .raw(`SELECT * FROM ${TABLE_PERFUMES}
            //     WHERE brand LIKE "%${search}%"
            //     OR name LIKE "%${search}%"
            //     ORDER BY ${sort} ${order}
            //     LIMIT ${limit}
            //     OFFSET ${offset};`)

            const result = await connection(TABLE_PERFUMES)
                .select()
                .where("brand", "LIKE", `%${search}%`)
                .orWhere("name", "LIKE", `%${search}%`)
                .orderBy(`${sort}`, `${order}`)
                .limit(limit)
                .offset(offset)

            return res.status(200).send({ perfumes: result })
        }

            // const [ result ] = await connection
            //     .raw(`SELECT * FROM ${TABLE_PERFUMES}
            //     ORDER BY ${sort} ${order}
            //     LIMIT ${limit}
            //     OFFSET ${offset};`)

          const result = await connection(TABLE_PERFUMES)
               .select()
               .orderBy(`${sort}`, `${order}`)
               .limit(limit)
               .offset(offset)

        res.status(200).send({perfumes: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 