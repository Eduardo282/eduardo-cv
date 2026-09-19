import JobCard from './JobCard'

export default function Experience() {
  return (
    <section className="section experience" id="experiencia" aria-labelledby="experiencia-titulo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / TRAYECTORIA</p>
          <h2 id="experiencia-titulo">Experiencia profesional<span>.</span></h2>
        </div>
        <p>Del desarrollo de interfaces<br />a la mejora de procesos.</p>
      </div>
      <div className="timeline">
        <JobCard number="01" period="AGO 2025 — ACTUALIDAD" badge="Posición actual" badgeType="current">
          <h3>Sinergy Digitals</h3>
          <p className="job-role">Desarrollo web</p>
          <p>
            Participación en el desarrollo de aplicaciones y el mantenimiento de sitios corporativos,
            desde la interfaz hasta los servicios backend.
          </p>
          <ul>
            <li>
              Desarrollo de <strong>Business Control</strong> con React y Tailwind CSS; implementación
              de servicios backend y conexión con bases de datos mediante Node.js y GraphQL.
            </li>
            <li>Creación de módulos de autenticación y control de accesos.</li>
            <li>
              Mantenimiento de sitios con arquitectura monolítica: maquetación, actualización de
              contenido e integración de recursos multimedia.
            </li>
            <li>Colaboración en la planeación, revisión de diseño y despliegue de proyectos digitales.</li>
          </ul>
          <div className="tags">
            <span>React</span><span>Tailwind CSS</span><span>Node.js</span><span>GraphQL</span>
          </div>
        </JobCard>

        <JobCard number="02" period="ENE 2025 — JUN 2025" badge="BUAP">
          <h3>Benemérita Universidad<br className="desktop-break" /> Autónoma de Puebla</h3>
          <p className="job-role">Desarrollo de software y soporte técnico</p>
          <p>
            Desarrollo de herramientas institucionales, mantenimiento de equipos y acompañamiento
            técnico a usuarios.
          </p>
          <ul>
            <li>
              Desarrollo de <strong>Encuentro Virtual</strong>: registro de participantes, control de
              asistencia, panel administrativo y generación de constancias y reportes en PDF y Excel.
            </li>
            <li>
              Implementación de validaciones de datos en cliente y servidor, y optimización de
              consultas SQL.
            </li>
            <li>
              Desarrollo de un sistema psicométrico con registro de usuarios, captura de imágenes,
              almacenamiento de resultados y agendamiento de entrevistas.
            </li>
            <li>
              Mantenimiento preventivo y correctivo de <strong>17 equipos de cómputo</strong>,
              instalación de SSD y automatización de tareas de limpieza.
            </li>
            <li>
              Configuración de software, gestión de cuentas y respaldos; elaboración de manuales y
              capacitación en Office y herramientas institucionales.
            </li>
          </ul>
          <div className="tags">
            <span>SQL</span><span>Automatización</span><span>PDF / Excel</span><span>Soporte técnico</span>
          </div>
        </JobCard>

        <JobCard number="03" period="AGO 2024 — DIC 2024" badge="PROYECTO">
          <h3>CIS · San Javier</h3>
          <p className="job-role">Automatización y gestión de archivos</p>
          <ul>
            <li>
              Organización de archivos multimedia mediante páginas web para facilitar su consulta e
              identificación.
            </li>
            <li>Diseño de plantillas para oficios, solicitudes y documentación de biblioteca.</li>
            <li>Creación de scripts de mantenimiento y capacitación en Office, Notion y Figma.</li>
          </ul>
          <div className="tags">
            <span>Gestión documental</span><span>Scripting</span><span>Capacitación</span>
          </div>
        </JobCard>

        <JobCard number="04" period="ENE 2024 — AGO 2024" badge="PROYECTO">
          <h3>Minería de datos</h3>
          <p className="job-role">Análisis de datos con Python</p>
          <ul>
            <li>
              Aplicación de agrupamiento jerárquico con el <strong>método de Ward</strong> para
              segmentar conjuntos de datos.
            </li>
            <li>
              Desarrollo de scripts para procesamiento, análisis y exportación de resultados a Excel
              con distintos umbrales de corte.
            </li>
            <li>Generación de histogramas para visualizar la distribución de variables por grupo.</li>
          </ul>
          <div className="tags">
            <span>Python</span><span>Análisis de datos</span><span>Excel</span><span>Visualización</span>
          </div>
        </JobCard>
      </div>
    </section>
  )
}
