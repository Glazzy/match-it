import classNames from "classnames"

export default function Page ({ children }) {
    const _className = classNames("p-8 mt-10 max-w-screen-sm mx-auto bg-[#1B2029] w-screen h-screen")

    return (
        <main className={_className}>
            {children}
        </main>
    )
}