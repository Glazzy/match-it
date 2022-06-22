import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/generics/buttons/Button'
import Page from '../components/generics/layout/page'
import BottomMenu from '../components/generics/menus/BottomMenu'
import TopMenu, { TopMenuWithBackButton } from '../components/generics/menus/TopMenu'
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
      <TopMenuWithBackButton>
        <ul className='flex gap-2 items-center'>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </TopMenuWithBackButton>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
     
      <BottomMenu />
    </Page>
  )
}

export default Home
