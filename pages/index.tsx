import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/generics/buttons/Button'
import Page from '../components/generics/layout/Page'
import { NextPageWithPageSettings } from '../components/generics/layout/shared/types'
import BottomMenu from '../components/generics/menus/BottomMenu'
import styles from '../styles/Home.module.css'

const Home: NextPageWithPageSettings = () => {
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
     
        <Button onClick={() => signIn()}>Sign in</Button>
        <button className='text-red-400' >Sign in</button>

    </Page>
  )
}

Home.pageSettings = {
  pageName: 'Home'
}

export default Home


