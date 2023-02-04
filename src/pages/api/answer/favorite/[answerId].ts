import { getServerSession } from 'next-auth';
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from '../../../../libs/authOption';
import { db } from '../../../../libs/prisma';
import { withMethods } from '../../../../libs/middlewares/with-methods';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);
    if (session === null) {
        return res.status(403).end();
    }
    
    if (req.method === "PATCH") {
        try {
            await db.answer.update({
                where:{
                    id: req.query.answerId as string,
                },
                data: {
                    favoritedBy: {
                        connect:{
                         id: session?.user.id,
                        }
                    }
                }
            })
            return res.status(201).json({succes: "Favorite answer"})
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    };
    if (req.method === "DELETE") {
        try {
            await db.answer.update({
                where:{
                    id: req.query.answerId as string,
                },
                data: {
                    favoritedBy: {
                        disconnect:{
                         id: session?.user.id,
                        }
                    }
                }
            })
            return res.status(201).json({succes: "Favorite answer"})
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    };
    
}

export default  withMethods(["PATCH","DELETE","GET"],handler) 