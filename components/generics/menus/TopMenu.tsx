import classNames from 'classnames'
import { Avatar, Button } from 'flowbite-react'
import React, { ReactNode } from 'react'
import usePageTitle from '../../settings/hooks/usePageTitle'


export default function TopMenu({ children, className}: {children: ReactNode, className?: string}) {

    const _className = classNames( className, 'top-0 left-0 fixed w-full p-2 flex bg-[#252C39]')

    return (
        <nav className={_className}>
            {children}
        </nav>
    )
}

export function DefaultMenuItems() {
    return (
        <Button.Group>
            <Button color="gray">
            Profile
            </Button>
            <Button color="gray">
            Settings
            </Button>
            <Button color="gray">
            Messages
            </Button>
      </Button.Group>
    )
}

export function DefaultTopNavigation({className}: { className?: string}) {

    const _className = classNames(className, 'justify-between')
    const pageTitle = usePageTitle()

    return (
        <TopMenu className={_className}>
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
            
            {pageTitle}

            <DefaultMenuItems />
        </TopMenu>
    )
}



export function SubpageTopNavigation({className, title, children}: {className?: string}) {

    const _className = classNames(className, 'justify-between')
    const pageTitle = usePageTitle()
  
    return (
        <TopMenu className={_className}>
            {pageTitle}
        </TopMenu>
    )
}


function BackButton () {

    const _className = classNames('')

    return (
        <Button size='md' variant={null}>
            Back
        </Button>
    )
}


