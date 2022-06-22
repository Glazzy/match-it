import classNames from 'classnames'
import React, { ReactNode } from 'react'

interface buttonSizes {
    sm: string,
    md: string,
    lg: string
}

type sizes = keyof buttonSizes;

export default function Button({size = "md", variant = 'secondary', className, disabled, children, ...restProps}: {size?: sizes; variant?: 'primary' | 'secondary' | 'negative' | 'positive' | null; className?: string; disabled?: boolean; children: ReactNode}) {

    const sizeMap = {
        sm: 'h-8 px-4',
        md: 'h-10 px-6',
        lg: 'h-12 px-8',
    }

    const variantMap = {
        primary: 'bg-blue-500 hover:bg-opacity-75 text-white',
        secondary: 'bg-violet-500 hover:bg-opacity-75 text-white',
        negative: 'bg-red-500 hover:bg-opacity-75 text-white',
        positive: 'bg-green-500 hover:bg-opacity-75 text-white',
    }

    const _className = classNames(className, 'inline-flex justify-center items-center rounded-3xl font-semibold',
        sizeMap[size],
        variant && variantMap[variant],
        {['opacity-50 pointer-events-none']: disabled}
    )

  return (
    <button {...restProps} className={_className}>
        {children}
    </button>
  )
}
