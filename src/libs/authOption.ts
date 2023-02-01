import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { db } from './prisma';

export const authOptions: NextAuthOptions={
  adapter: PrismaAdapter(db as any),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signIn",
  },
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET??"",
      }),
  ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    callbacks: {
        async session({ token, session }) {
          if (token!=null) {
            session.user.id = token.id as string;
            session.user.name = token.name
            session.user.email = token.email
            session.user.image = token.picture
          }

          return session
        },
        async jwt({ token, user }) {
          const dbFindUser = await db.user.findFirst({
            where: {
              email: token.email,
            },
          })
    
          if (!dbFindUser) {
         token.id = user?.id as string;

            return token
          }
    
          return {
            id: dbFindUser.id,
            name: dbFindUser.name,
            email: dbFindUser.email,
            picture: dbFindUser.image,
          }
        },
    },
}