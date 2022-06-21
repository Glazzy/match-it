import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import Page from '../components/generics/layout/page'
import BottomMenu from '../components/generics/menus/bottomMenu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data: session, status } = useSession()


  console.log(session)

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <Page>
      Not signed in <br />
      <button className='text-red-400' onClick={() => signIn()}>Sign in</button>
      <BottomMenu />
    </Page>
  )
}

export default Home
