import styles from 'styles/ListOfCategories.module.css'
import Section from './Section'

export default function ListOfCategories ({ categorias }) {
  return (
    <Section className={styles.section}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th scope="col">Nombre Contenedor</th>
            <th scope="col">Servicio</th>
            <th scope="col">Especificación</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(({ id, nombre, servicio, procesador, memoria, almacenamiento }) => (
            <tr className={styles.tr} key={id}>
              <td className={styles.td}>{nombre}</td>
              <td className={styles.td}>{servicio}</td>
              <td className={styles.td}>
                <ul className={styles.listUl}>
                  <li>Procesador: {procesador}</li>
                  <li>Memoria: {memoria}</li>
                  <li>Almacenamiento: {almacenamiento}</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  )
}