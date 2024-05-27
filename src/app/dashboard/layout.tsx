"use client"
import { useSearchParams } from "next/navigation"
export default function Layout({ admin, user }: any) {
  const router = useSearchParams()

  let routes = router.get("data")

  return <div>{routes === "admin" ? admin : user}</div>
}
