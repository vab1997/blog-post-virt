import Logo from 'components/Logo'
import styles from 'styles/Footer.module.css'
import IconGithub from './icons/IconGithub'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
        Desarrollado por Victor Bejas
        <span className={styles.logo}>
          <Logo width={56} height={56} />
        </span>
        <span className={styles.bull}>&bull;</span>
        <a href='https://github.com/vab1997' target='_blank' rel='nofollow noreferrer'>
          Github
          <span className={styles.logo}>
            <IconGithub width={32} height={32} />
          </span>
        </a>
      </div>
    </footer>
  )
}
