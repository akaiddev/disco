import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Disco {new Date().getFullYear()}</p>
      <p>
        <Link href='/about'>About disco</Link>
      </p>
    </footer>
  )
}
