import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from 'next-auth'
import { authOptions } from '../authOption'

export function withAuthentication(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)

    if (session == null) {
      return res.status(403).json({error: "You are not authenticated"})
    }
    return handler(req, res)
  }
}