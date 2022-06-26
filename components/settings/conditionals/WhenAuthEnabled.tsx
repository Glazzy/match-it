import React from 'react'
import { authSettings } from '../../generics/layout/shared/types'

export default function WhenAuthEnabled({authSettings, negate = false, children}: {authSettings?: authSettings; negate?: boolean; children: JSX.Element}) {
    
    if(negate) return authSettings?.isAuthEnabled ? null : children

    return authSettings?.isAuthEnabled ? children : null
}
