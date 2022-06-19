import Section from 'components/Section'
import styles from 'styles/Profile.module.css'
import ProfilePicture from 'components/ProfilePicture'
import IconGithub from 'components/icons/IconGithub'
import DataDownload from './DataDownload'

const datos = {
  nombre: 'Victor',
  apellido: 'Bejas',
  asignatura: 'Virtualizacion',
  legajo: '46255',
  comision: '5K3'
}

export default function Profile ({ datosPersonales }) {
  const { nombre, apellido, legajo, asignatura, comision } = datosPersonales[0]
  return (
    <>
      <Section className={styles.profile}>
        <div className={styles.profileContainer}>
          <div className={styles.profilePicture}>
            <ProfilePicture />
          </div>
          <div className={styles.profileBody}>
            <div className={styles.profileContent}>
              <p className={styles.greet}>
                ¡Hola! <span className={styles.wave}>👋</span>
              </p>
              <h1 className={styles.title}>Soy Victor.</h1>
              <p className={styles.personalData}>
                <span className={styles.dataLabel}>
                  Nombre y Apellido: 
                </span>
                {} {nombre} {apellido}
              </p>
              <p className={styles.personalData}>
                <span className={styles.dataLabel}>
                  Asignatura: 
                </span>
                {} {asignatura}
              </p>
              <p className={styles.personalData}>
                <span className={styles.dataLabel}>
                  Legajo:  
                </span>
                {} {legajo}
              </p>
              <p className={styles.personalData}>
                <span className={styles.dataLabel}>
                  Comisión:  
                </span>
                {} {comision}
              </p>
            </div>
            <DataDownload />
          </div>
        </div>
      </Section>
    </>
  )
}
