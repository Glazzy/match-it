import { useSession } from "next-auth/react"

export default function Main () {
    const { data: session } = useSession()
    // session is always non-null inside this page, all the way down the React tree.
    return "Welcome to the main dashboard"
}

Main.auth = true