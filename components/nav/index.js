import styles from './nav.module.css'
import Link from 'next/link'
import { hasSession } from '../../services/auth.service'

export default function Nav() {
  return (
    <nav className={styles.container}>
      {
        hasSession()
          ?
          <Link href="/">
            <a>Sing out</a>
          </Link>
          :
          <Link href="/login">
            <a>Log in</a>
          </Link>
      }
    </nav>
  )

}