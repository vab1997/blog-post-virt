import Link from 'next/link'
import styles from 'styles/Header.module.css'
import Logo from 'components/Logo'

export default function Navbar () {
  return (
    <>
      <nav className={styles.navbar} role='navigation' aria-label='main navigation'>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLeft}>
            <Link href='/'>
              <a className={styles.navLogo} title='victor Bejas'>
                <Logo width={75} height={75} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
