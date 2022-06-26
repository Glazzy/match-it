import { NextComponentType, NextPageContext } from "next"
import { SessionProvider, useSession } from "next-auth/react"
import type { AppProps } from 'next/app'
import PageSettings from "../components/settings/PageSettings"
import AuthSettings from "../components/settings/AuthSettings"
import { NextPageWithPageSettings } from "../components/generics/layout/shared/types"
import '../styles/globals.css'
import NavSettings from "../components/settings/NavSettings"
import { RecoilRoot } from "recoil"
import WhenAuthEnabled from "../components/settings/conditionals/WhenAuthEnabled"
import { RecoilSync } from "recoil-sync"
import RecoilPageNameSync from "../components/settings/RecoilPageNameSync"


type NextComponentWithPageSettings = NextComponentType<NextPageContext, any, {}> & Partial<NextPageWithPageSettings>

type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithPageSettings
};

export default function App({ Component, pageProps: { session, ...pageProps } }: ExtendedAppProps) {
  console.log(Component.pageSettings)

  return (
    <SessionProvider session={session}>

      <RecoilRoot>
        <RecoilPageNameSync pageName={Component.pageSettings?.pageName}>

        <WhenAuthEnabled authSettings={Component.authSettings}>
          <AuthSettings authSettings={Component.authSettings}>
              <NavSettings navSettings={Component.navSettings}>
                <PageSettings pageSettings={Component.pageSettings}>
                  <Component {...pageProps} />
                </PageSettings>
              </NavSettings>
            </AuthSettings>
        </WhenAuthEnabled>
      
        <WhenAuthEnabled authSettings={Component.authSettings} negate>
          <NavSettings navSettings={Component.navSettings}>
            <PageSettings pageSettings={Component.pageSettings}>
              <Component {...pageProps} />
            </PageSettings>
          </NavSettings>
        </WhenAuthEnabled>

        </RecoilPageNameSync>

    </RecoilRoot>

    </SessionProvider>
  )
}

