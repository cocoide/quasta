
import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from '../../../libs/middlewares/with-methods';
import { db } from '../../../libs/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const results=await db.answer.findMany({
                where:{
                    id: {
                        search: req.query.keyword as string,
                    },
                },
                orderBy: {
                    _relevance: {
                      fields: ["id"],
                      search: req.query.keyword as string,
                      sort: "desc",
                    },
                  },
            })
            return res.status(201).json(results)
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    }
}

export default  withMethods(["GET"], handler) 