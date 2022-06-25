import classNames from "classnames"


export default function Page ({ pageSettings, children }) {
    console.log(pageSettings)
    const _className = classNames("p-8 max-w-screen-sm mx-auto bg-[#1B2029] w-screen h-screen")


    return (
        <>
            
            <main className={_className}>
                {children}
            </main>
        </>
        
    )
}