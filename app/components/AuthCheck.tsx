'use client'

import { useSession } from "next-auth/react"
import { ReactNode } from "react"

interface AuthCheckProps {
  children?: ReactNode
}

export default function AuthCheck({ children }: AuthCheckProps) {
  const { status } = useSession()

  return status === 'authenticated' ? <>{children}</> : null
}