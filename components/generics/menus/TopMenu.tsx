import classNames from 'classnames'
import React from 'react'
import Button from '../buttons/Button'

export default function TopMenu({children, className}) {

    const _className = classNames( className, 'top-0 left-0 fixed w-full h-10 flex bg-[#252C39]')

  return (
    <nav className={_className}>
        {children}
    </nav>
  )
}

export function TopMenuWithBackButton({className, children}: {className?: string}) {

    const _className = classNames(className, 'justify-between')

    return (
        <TopMenu className={_className}>
            <BackButton />
            {children}
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


