export default function Education() {
  return (
    <section className="section" id="formacion" aria-labelledby="formacion-titulo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / FORMACIÓN</p>
          <h2 id="formacion-titulo">Aprendizaje continuo<span>.</span></h2>
        </div>
      </div>
      <div className="education-layout">
        <div className="education-left">
          <article className="degree glass">
            <span className="education-mark">BUAP<span> /</span></span>
            <p className="eyebrow">EDUCACIÓN SUPERIOR</p>
            <h3>Ingeniería en Tecnologías de la Información</h3>
            <p>Benemérita Universidad<br />Autónoma de Puebla</p>
          </article>
          <div className="languages">
            <h3>Idiomas</h3>
            <div><span>Español</span><span>Nativo</span></div>
            <div><span>Inglés</span><span>B1 · En formación</span></div>
          </div>
        </div>
        <div className="training">
          <h3>Cursos y certificaciones</h3>
          <details open>
            <summary>
              Desarrollo Full Stack y arquitectura
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Bootcamp MERN (MongoDB, Express, React y Node.js). Maquetación y diseño responsive;
              APIs con PHP y Laravel; principios SOLID y MVC; GraphQL y REST.
            </p>
          </details>
          <details>
            <summary>
              Productividad y metodologías ágiles
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Microsoft Office Specialist (MOS) en Excel y Word. Taller de Scrum y XP; gestión con
              Trello y Notion; comunicación y documentación técnica.
            </p>
          </details>
          <details>
            <summary>
              Diseño de experiencia de usuario
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Diseño de interfaces y prototipos de alta fidelidad con Figma; accesibilidad web (WCAG),
              pruebas de usabilidad y wireframes con Balsamiq.
            </p>
          </details>
          <details>
            <summary>
              Ciencia de datos y automatización
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Análisis y visualización de datos con Python, Pandas y Matplotlib. Automatización de
              tareas mediante scripts.
            </p>
          </details>
          <details>
            <summary>
              Aseguramiento de calidad y testing
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Introducción a Playwright; pruebas unitarias con Mocha, Jasmine y PyTest; pruebas de API
              con Postman e Insomnia.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
