import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
      })
    ],
    theme: {
      colorScheme: "light",
    },
    callbacks: {
        async jwt({token, account}) {
            if(account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token
        },
        redirect: async ({url, baseUrl}) => {
            console.log(baseUrl, 'test')
            if(url === '/user') {
                return Promise.resolve('/')
            }
            return Promise.resolve('/')
        }
    }
  });