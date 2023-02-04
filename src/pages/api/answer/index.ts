import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from '../../../libs/middlewares/with-methods';
import { db } from '../../../libs/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const answers = await db.answer.findMany({
                orderBy: {
                    createdAt: "desc"
                },
                select: {
                    id: true,
                    answer: true,
                    favoritedBy: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    query: {
                        select: {
                            query: true
                        },
                    },
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        }
                    },
                    _count: {
                        select: {
                            favoritedBy: true
                        },
                    },
                },
            })
            return res.json(answers)
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    }
}

export default  withMethods(["GET"],handler) 