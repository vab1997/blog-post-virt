import Head from 'next/head'
import styles from 'styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout ({
  children,
  title = 'TFI 2022',
  description = 'Website Victor Bejas'
}) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>{title} | Victor Bejas</title>
        <link rel='icon' href='Logo.webp' />
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta property='og:locale' content='es-ES' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content='https://victorbejas.dev' />
        <meta property='og:site_name' content='victorbejas.dev' />
        <meta name='author' content='Victor Bejas' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@victorbejas' />
        <meta name='twitter:domain' content='https://twitter.com/victorbejas' />
        <meta name='twitter:site' content='@victorbejas' />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
