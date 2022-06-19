import Layout from 'components/Layout'
import Section from 'components/Section'
import Image from 'next/image'
import styles from 'styles/Informe-imp.module.css'

import ilustration from 'public/ilustServidor.webp'
import stack from 'public/stack.webp'
import contCli from 'public/contCli.webp'
import contSer from 'public/contSer.webp'
import nodeSer from 'public/nodeSer.webp'
import mysqlSer from 'public/mysqlSer.webp'	
import nodeCli from 'public/nodeCli.webp'
import gitSer from 'public/gitSer.webp'
import gitCli from 'public/gitCli.webp'
import ListOfCategories from 'components/ListOfCategories'

export default function InformeImpl ({ categorias }) {
  const {nombre, procesador, memoria, almacenamiento} = categorias
  
  return (
    <Layout title='Sobre mi'>

      <div className={styles.profileContainer}>
        <div className={styles.profilePicture}>
          <Image src={ilustration} width={120} height={120} alt='imagen ilustrativa de virtualización' />
        </div>
      </div>

      <Section>
        <div className={styles.section}>
          <h1>Informe Trabajo Final Integrador</h1>
          <h2>Virtualizacion y Consolidacion de Servidores</h2>
          <div className={styles.contentDiv}>
            <aside className={styles.contentAside}>
              <span className={styles.spanSubtitle}>Caso de Estudio</span>
              <p>
                Para el siguiente trabajo final integrador de la cátedra de Virtualización y Consolidación de Servidores se propuso la
                elaboración e implementación de un Blog personal que debe contemplar las siguientes funcionalidades:
              </p>
              <ul className={styles.listUl}>
                <li>Listar las categorías de los temas.</li>
                <li>Detallar los datos personales del Autor e incorporar la foto del mismo.</li>
                <li>El primer y único artículo deberá ser la presentación del documento correspondiente al resultado final de este
                  trabajo práctico final, adjuntando el documento (PDF) del mismo.
                </li>
              </ul>
              <p>
                Para realizar este trabajo se hizo uso de la plataforma Proxmox que es una plataforma de virtualización Open Source,
                en este caso se utilizó el nodo bejuca.hopto.org:18006 proporcionado por la cátedra.
              </p>
              <p>
                Para el mismo se optó por una Arquitectura cliente-servidor que estarán alojadas en contenedores distintos.
                A continuación se muestran los mismo con más detalles:
              </p>
            </aside>
            <ListOfCategories categorias={categorias} />
            {/* <table className={styles.table}>
              <thead>
                <tr className={styles.tr}>
                  <th scope="col">Nombre Contenedor</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Especificación</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>40697516i</td>
                  <td className={styles.td}>Cliente</td>
                  <td className={styles.td}>
                    <ul className={styles.listUl}>
                      <li>Procesador: 1 CPU(1 core)</li>
                      <li>Memoria: 512 MiB</li>
                      <li>Almacenamiento: 10 GiB</li>
                    </ul>
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>40697516db</td>
                  <td className={styles.td}>Servidor</td>
                  <td className={styles.td}>
                    <ul className={styles.listUl}>
                      <li>Procesador: 1 CPU(1 core)</li>
                      <li>Memoria: 512 MiB</li>
                      <li>Almacenamiento: 10 GiB</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>

          {/* <ListOfCategories categorias={categorias} /> */}

          <div className={styles.contentDiv}>
            <div className={styles.contentPicture}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tr}>
                    <th scope="col">Contenedores</th>
                    <th scope="col">Pueros</th>
                    <th scope="col">Puertos Asignados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.tr}>
                    <td className={styles.td}>40697516i</td>
                    <td className={styles.td}>80, 443, 20</td>
                    <td className={styles.td}>
                      <ul className={styles.listUl}>
                        <li>bejuca.hopto.org:11010</li>
                        <li>bejuca.hopto.org:11011</li>
                        <li>bejuca.hopto.org:11012</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className={styles.tr}>
                    <td className={styles.td}>40697516db</td>
                    <td className={styles.td}>80, 443, 20</td>
                    <td className={styles.td}>
                      <ul className={styles.listUl}>
                        <li>bejuca.hopto.org:11006</li>
                        <li>bejuca.hopto.org:11007</li>
                        <li>bejuca.hopto.org:11009</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <aside className={styles.contentAside}>
              <p>
                En cuanto a la categoría de red, ambos contenedores están obteniendo una dirección ip por dhcp.
                En la siguiente tabla se detallan más aspectos sobre la red a tener en cuenta:
              </p>
            </aside>
          </div>

          <div className={styles.contentDiv}>
            <span className={styles.spanSubtitle}>Stack tecnológico utilizado para la implementación</span>
            <Image src={stack} alt='Stack tecnológico utilizado para la implementación' />
          </div>

          <span className={styles.spanSubtitle}>Implementación</span>

          <div className={styles.contentDiv}>
            <aside className={styles.contentAside}>
              <p>
                Para la implementación en primer lugar se crearon los contenedores en la plataforma Proxmox con los recursos
                anteriormente mencionados, donde se instaló el sistema operativo Ubuntu 20.04 LTS.
                Contenedores para el cliente y el servidor:
              </p>
            </aside>
            <div>
              <Image src={contCli} alt='contenedores para el cliente' />
              <Image src={contSer} alt='contenedores para el servidor' />
            </div>
          </div>

          <div className={styles.contentDiv}>
            <aside className={styles.contentAside}>
              <p>
                Para el contenedor donde estará alojada la API y la base de datos, tenemos que instalar los servicios de Mysql y
                de Node.js. Al momento de crear la API con Node.js, la misma necesita de otros servicios como ser Express para
                montar el servidor HTTP que se encargue de la gestión de las peticiones que llegan al mismo.
              </p>
              <p>Los comandos utilizados para la instalación de nodejs en la versión 14.x fueron:</p>

              <ul className={styles.listUl}>
                <li>sudo apt update</li>
                <li>apt install curl</li>
                <li>curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh</li>
                <li>nano nodesource_setup.sh</li>
                <li>sudo bash nodesource_setup.sh</li>
                <li>sudo apt-get install -y nodejs</li>
              </ul>

              <p>Los comandos utilizados para la instalación de mysql fueron:</p>

              <ul className={styles.listUl}>
                <li>sudo apt install mysql-server</li>
              </ul>

              <p>Para establecer contraseña al usuario root de mysql:</p>

              <ul className={styles.listUl}>
                <li>ALTER USER `root`@`localhost` IDENTIFIED WITH mysql_native_password BY `vab199712`;</li>
                <li>flush privileges;</li>
              </ul>
            </aside>
              <div>
                <Image src={nodeSer} alt='instalación correcta de node en el servidor' />
                <Image src={mysqlSer} alt='instalación correcta de mysql en el servidor' />
              </div>
          </div>

          <div className={styles.contentDiv}>
            <div>
              <Image src={nodeCli} alt='instalación correcta de node en el cliente' />
            </div>
            <aside className={styles.contentAside}>
              <p>
                Para el contenedor donde estará alojado el FrontEnd, es requerido tener instalado Node.js.
                Cabe recalcar que el proyecto está construido con el framework Next.js el cual al momento de instalarlo,
                requiere de dependencias de librerías para su funcionamiento, como pueden ser React.js.
              </p>
              <p>Los comandos utilizados para la instalación de nodejs en la versión 14.x fueron:</p>

              <ul className={styles.listUl}>
                <li>sudo apt update</li>
                <li>apt install curl</li>
                <li>curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh</li>
                <li>nano nodesource_setup.sh</li>
                <li>sudo bash nodesource_setup.sh</li>
                <li>sudo apt-get install -y nodejs</li>
              </ul>
            </aside>
          </div>

          <div className={styles.contentDiv}>
            <aside className={styles.contentAside}>
              <p>
                En ambos contenedores se realizó la instalación del servicio de git, para desde ahí obtener el código de la API(BackEnd)
                y el FrontEnd. Se hizo uso de la plataforma de versionado de código GitHub para alojar el ambos proyectos.
              </p>

              <p>El comando utilizado para la instalación de git:</p>
              <ul className={styles.listUl}>
                <li>apt install git</li>
              </ul>
            </aside>
            <div>
              <Image src={gitSer} alt='instalación correcta de node en el cliente' />
              <Image src={gitCli} alt='instalación correcta de node en el cliente' />
            </div>
          </div>

          <div className={styles.conclusiones}>
            <span className={styles.spanSubtitle}>Conclusiones:</span>
            <p>
              Todas las herramientas que fuimos aprendiendo a lo largo de la cursada, fueron de vital importancia para poder llevar
              a cabo este Trabajo Final. El mismo requirió de más investigación para poder llevarlo a cabo y obtener los resultados
              solicitados y esperados por la cátedra de Virtualización y Consolidación de servidores.
            </p>

            <p>
              Este trabajo fue muy interesante ya que me permitió aprender más en profundidad como es la administración de recursos,
              la creación de contenedores, instalación de servicios y la implementación de un Stack Tecnológico que dé soporte a la
              solución del problema planteado.
            </p>

            <p>
              En cuanto a la plataforma Proxmox, al ser de Open Source y que esté disponible para cualquier persona que requiera de los
              servicios que brinda la misma, resulta la más adoptada tanto para entornos de producción como entornos de desarrollo.
            </p>
          </div>

        </div>
      </Section>

    </Layout>
  )
}

export async function getStaticProps () {
  const categorias = await fetch('http://localhost:4000/categoria').then(res => { return res.json() })
  
  return {
    props: {
      categorias
    }
  }
}