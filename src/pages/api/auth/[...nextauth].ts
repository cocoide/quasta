import { NextApiHandler } from 'next';
import NextAuth from 'next-auth/next'
import { authOptions } from '../../../libs/authOption';


const nextAuthHandler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions)
export default nextAuthHandler;
