import { SessionProvider, useSession } from "next-auth/react"
import type { AppProps } from 'next/app'
import { useRouter } from "next/router"
import { ReactNode } from "react"
import '../styles/globals.css'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? 
        (
        <Auth>
          <Component {...pageProps} />
        </Auth>
        ) 
        : 
        (
        <Component {...pageProps} />
        )}
     
      
    </SessionProvider>
  )
}

function Auth ({ children }: {children: ReactNode}) {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/")
    },
  })

  if ( status === "loading") return <span>Loading..</span>


  return children
}