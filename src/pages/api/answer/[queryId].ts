import { getServerSession } from 'next-auth';
import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from '../../../libs/middlewares/with-methods';
import { authOptions } from '../../../libs/authOption';
import { db } from '../../../libs/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions);
        if (session === null) {
            return res.status(403).end();
        }
        try {
            await db.answer.create({
                data: {
                    authorId: session?.user.id,
                    answer: req.body.answer,
                    queryId: req.query.queryId as string,
                    image: req.body.answer,
                }
            }
            )
            return res.status(201).json({succes: "Answer Created"})
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    };
    if (req.method === "GET") {
        try {
            const answers = await db.answer.findMany({
                orderBy: {
                    createdAt: "desc"
                },
                where: {
                    queryId: req.query.queryId as string,
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
                    comments:{
                        select:{
                            comment: true,
                            author:{
                                select:{
                                    name: true,
                                    image: true,
                                },
                            }
                        }
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
                            favoritedBy: true,
                            comments: true,
                        },
                    },
                },
            }
            )
            return res.json(answers)
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    }
}

export default  withMethods(["POST","GET"],handler) 