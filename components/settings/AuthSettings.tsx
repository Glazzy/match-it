import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import { authSettings } from "../generics/layout/shared/types";

export default function AuthSettings({ authSettings, children }: { authSettings?: authSettings; children: JSX.Element}): JSX.Element {
    const router = useRouter()
    const { status } = useSession({
      required: true,
      onUnauthenticated() {
        router.push("/")
      },
    })
  
    if (status === "loading") return <span>Loading..</span>
  
    return children
  }