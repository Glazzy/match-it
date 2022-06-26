import React from 'react'
import { bottomNavigationTypes, navigationSettings, topNavigationTypes } from '../generics/layout/shared/types'
import BottomMenu from '../generics/menus/BottomMenu'
import { DefaultTopNavigation, SubpageTopNavigation } from '../generics/menus/TopMenu'

interface defaultNavSettings extends navigationSettings {
    topNavigationType: topNavigationTypes,
    bottomNavigationType: bottomNavigationTypes  
 }
 

 const defaultNavSettings: defaultNavSettings = {
     topNavigationType: 'default',
     bottomNavigationType: 'default'  
 }
 

export default function NavSettings({navSettings, children}: {navSettings?: navigationSettings, children?: JSX.Element}) {
    const mergedNavSettings = {...defaultNavSettings, ...navSettings}
    const {topNavigationType, bottomNavigationType, customTopNavigation, customBottomNavigation} = mergedNavSettings

    return (
        <>
            {/* Top navigation renderer */}
            {topNavigationType !== 'custom' ? (<TopNavigation type={topNavigationType} />) : (
                    customTopNavigation
                )}
                
                {/* Page content */}
                {children}

            {/* Bottom navigation renderer */}
            {bottomNavigationType !== 'custom' ? (<BottomNavigation type={bottomNavigationType} />) : (
                customBottomNavigation
            )}
        </>
    )
}

function TopNavigation({type}: {type: topNavigationTypes}) {

    const getTopNavigation = (type: topNavigationTypes) => {
      switch (type) {
        case "default":
            return <DefaultTopNavigation />
        case "mainpage":
            return <DefaultTopNavigation />
        case "subpage":
            return <SubpageTopNavigation />
        case "none":
            return null
        default:
            return <DefaultTopNavigation />;
      }
          
    }

    return getTopNavigation(type)
}

function BottomNavigation({type}: {type: bottomNavigationTypes}) {

    const getBottomNavigation = (type: topNavigationTypes) => {
        switch (type) {
          case "default":
                return <BottomMenu />
          case "none":
                return null
          default:
                return <BottomMenu />;
        }
    }

    return getBottomNavigation(type)
}