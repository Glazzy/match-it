import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Console } from "console";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      })
    ],
    theme: {
      colorScheme: "light",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          console.log('### SIGN IN ###', { user, account, profile, email, credentials })
          return true
        },
        async redirect({ url, baseUrl }) {
          console.log(baseUrl, 'test')
          if(url === '/user') {
              return Promise.resolve('/')
          }
          return Promise.resolve('/')
        },
        async session({ session, user, token }) {

          console.log('### CURRENT SESSION ###', session, user, token)

          return session
        },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //   return token
        // }
    }
  });