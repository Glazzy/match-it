import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { RecoilSync } from 'recoil-sync'

export default function RecoilPageNameSync({pageName, children}: {pageName?: string, children: ReactNode}) {
  
  return (
    <RecoilSync read={() => pageName} listen={({updateItem}) => updateItem('PageNameState', pageName)}>
        {children}
    </RecoilSync>
  )
}
