import Image from "next/image"
import styles from "./UserCard.module.css"
import Link from "next/link"

interface UserCardProps {
  id: string
  name: string | null
  age: number | null
  image: string | null
}

export default function UserCard({ id, name, age, image }: UserCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
        className={styles.cardImage}
        width={150}
        height={120}
      />
      <div className={styles.cardContent}>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}
