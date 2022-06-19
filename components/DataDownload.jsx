import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/DataDownload.module.css'

import download from 'public/download.png'
import openBook from 'public/open-book.webp'

export default function DataDownload () {
  const pdfDownload = './BejasVictor_Laboratorio 1.pdf'
  return (
    <div className={styles.downloadpdf}>
      <a className={styles.download} download href={pdfDownload}>
        <Image
          width={24}
          height={24}
          src={download}
          alt='descargar pdf'
        />
        <span className={styles.img}>Descargar PDF de la presentación</span>
      </a>

      <Link href='/Informe-imp'>
        <a className={styles.download}>
          <Image
            width={24}
            height={24}
            src={openBook}
            alt='descargar pdf'
          />
          <span className={styles.img}>Ver Informe de implementación</span>
        </a>
      </Link>
    </div>
  )
}