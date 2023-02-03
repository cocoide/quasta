import { getServerSession } from 'next-auth';
import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from '../../../libs/middlewares/with-methods';
import { authOptions } from '../../../libs/authOption';
import { db } from '../../../libs/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);
    if (session === null) {
        return res.status(403).end();
    }
    if (req.method === "POST") {
        try {
            await db.answer.create({
                data: {
                    authorId: session?.user.id,
                    answer: req.body,
                    queryId: req.query.queryId as string
                }
            }
            )
            return res.status(201).json({succes: "Answer Created"})
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    }
}

export default  withMethods(["POST","GET"],handler) 