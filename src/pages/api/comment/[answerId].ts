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
            await db.comment.create({
                data: {
                    comment: req.body,
                    authorId: session?.user.id,
                    answerId: req.query.answerId as string
                }
            }
            )
            return res.status(201).json({succes: "Comment created"})
        } catch (e) {
            return res.status(500).json({error: "Server error happened"});
        }
    }
}

export default  withMethods(["POST","GET"],handler) 