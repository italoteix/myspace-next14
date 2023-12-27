import { prisma } from "@/lib/prisma"
import { Metadata } from "next"
import Image from "next/image"

interface UserProfileProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: UserProfileProps): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } })

  return { title: `User profile of ${user?.name}` }
}

export default async function UserProfile({ params }: UserProfileProps) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const { name, bio, image } = user ?? {}

  return (
    <div>
      <h1>{name}</h1>

      <Image
        width={300}
        height={240}
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
      />

      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  )
}
