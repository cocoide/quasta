import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../libs/authOption';
import { db } from '../../../../libs/prisma';
import { withMethods } from '../../../../libs/middlewares/with-methods';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession( req, res, authOptions);
    if (req.method === "PATCH") {
    try {
        await db.user.update({
            where: {
                id: session?.user.id,
            },
            data: {
                following: {
                    connect: {
                        id: req.query.uid as string
                    }
                }
            }
        });
res
  .status(200)
  .json({ success: `${session?.user.id} followed ${req.query.uid}` });

    }
    catch (e) {
        return res.status(500).end({e});
    }
    };
    if (req.method === "DELETE") {
    try {
        await db.user.update({
            where: {
                id: session?.user.id,
            },
            data: {
                following: {
                    disconnect: {
                        id: req.query.uid as string
                    }
                }
            }
        });

        res.status(200).json({ success: `${session?.user.id} unfolowed ${req.query.uid}`  });
    }
    catch (e) {
        return res.status(500).end({e});
    }
    };
    if (req.method === "GET") {
    try {
        const results= await db.user.findUnique({
            where: {
                id: session?.user.id,
            },
            select : {
                following: {
                    select:{
                        id: true,
                    }
                }
            }
        });
        const checkFollowing=(uid: string):boolean=>{
            if(results?.following!=null){
              return results?.following.some((following)=>following.id.includes(uid))
            }else{return false}
        }
        res.status(200).json(checkFollowing(req.query.uid as string));
    }
    catch (e) {
        return res.status(500).end({e});
    }
    };
};
export default withMethods(["DELETE", "PATCH","GET"], handler)