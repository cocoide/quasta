
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../libs/authOption';
import { withMethods } from '../../../libs/middlewares/with-methods';
import { db } from '../../../libs/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);
    if (session === null) {
        return res.status(403).end();
    };
    if (req.method === "GET") {
        try {
            const results = await db.user.findUnique({
                where: {
                    id: session.user.id
                },
                select: {
                    id: true,
                    image: true,
                    name: true,
                    profile: {
                        select: {
                            occupation: true,
                            overview: true,
                        },
                    }
                }
            });
            return res.status(201).json(results)
        } catch (e) {
            return res.status(500).json({ error: "Server Error Happened" });
        }
    }
    if (req.method === "PATCH") {
        try {
            await db.user.update({
                where: {
                    id: session.user.id
                },
                data: {
                    name: req.body.name,
                    profile: {
                        upsert: {
                            create: {
                                occupation: req.body.occupation,
                                overview: req.body.overview,
                            },
                            update: {
                                occupation: req.body.occupation,
                                overview: req.body.overview,
                            },
                        },
                    }
                }
            });
            return res.status(201).json({ success: "User profile updated successfully" })
        } catch (e) {
            return res.status(500).json({ error: "Internal server error happened" });
        }
    }
}

export default withMethods(["GET", "PATCH"], handler) 