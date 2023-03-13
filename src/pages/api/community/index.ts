import { NextApiResponse,NextApiRequest  } from 'next';
import { withMethods } from '../../../libs/middlewares/with-methods';
import { db } from '../../../libs/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../libs/authOption';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const community= await db.community.findMany({
                select: {
                    id: true,
                    name: true,
                    image: true,
                    overview: true,
                }
            })
            return res.status(201).json(community)
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    }
    if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions);
        if (session === null) {
            return res.status(403).end();
        }
        try {
            await db.community.create({
                data: {
                    id: req.body.id,
                    name: req.body.name,
                    image: req.body.image,
                    overview: req.body.overview,
                }
            })
            return res.status(201).json({succes: "New Community Created"})
        } catch (e) {
            return res.status(500).json({error: "Server Error Happened"});
        }
    }
}

export default  withMethods(["POST","GET"],handler) 