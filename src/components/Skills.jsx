import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section className="section" id="habilidades" aria-labelledby="habilidades-titulo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / CAPACIDADES</p>
          <h2 id="habilidades-titulo">Herramientas para construir<span>.</span></h2>
        </div>
        <p>Desarrollo, datos<br />y experiencia de usuario.</p>
      </div>
      <div className="skills-grid">
        <SkillCard icon={'</>'} title="Frontend">
          <p>React · JavaScript ES6+ · Astro<br />HTML5 · CSS3 · SCSS · Tailwind CSS</p>
          <p className="secondary">Bootstrap, Ant Design, Material UI, shadcn/ui, Chakra UI, Bulma y Foundation.</p>
        </SkillCard>

        <SkillCard icon="{ }" title="Backend y APIs">
          <p>Node.js · Express · PHP · Laravel<br />GraphQL · REST · Socket.IO</p>
          <p className="secondary">Arquitectura MVC, principios SOLID y DRY, SOAP y validación de datos.</p>
        </SkillCard>

        <SkillCard icon="[ : ]" title="Datos y automatización">
          <p>Python · MySQL · MongoDB<br />MariaDB · SQLite · Firebase</p>
          <p className="secondary">Pandas, Matplotlib, Chart.js, generación de reportes, jsPDF y PDF-lib.</p>
        </SkillCard>

        <SkillCard icon="⌘" title="Infraestructura y seguridad">
          <p>Git · GitHub · Docker<br />Nginx · Apache · Cloudflare</p>
          <p className="secondary">JWT, Auth0, Supabase Auth y Helmet.</p>
        </SkillCard>

        <SkillCard icon="✓" title="Testing y calidad">
          <p>Playwright · PyTest<br />Mocha · Jasmine · Postman</p>
          <p className="secondary">Insomnia y Yaak para pruebas de API; Docusaurus y MDX para documentación.</p>
        </SkillCard>

        <SkillCard icon="⊞" title="Diseño y colaboración">
          <p>Figma · Balsamiq · UX/UI<br />Scrum · Trello · Notion</p>
          <p className="secondary">Prototipado, accesibilidad, documentación técnica y capacitación a usuarios.</p>
        </SkillCard>
      </div>
    </section>
  )
}
