export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="nombre">
      <div className="intro">
        <div className="eyebrow">
          <span className="rule"></span> INGENIERÍA · DESARROLLO · AUTOMATIZACIÓN
        </div>
        <h1 id="nombre">Eduardo<br /><span className="silver">Francisco García</span></h1>
        <p className="role">Ingeniero en Tecnologías<br className="desktop-break" /> de la Información</p>
        <p className="profile">
          Desarrollo soluciones web y automatizo procesos. Combino interfaces funcionales, servicios
          backend y gestión de datos para simplificar el trabajo de equipos y usuarios.
        </p>
        <div className="hero-tags" aria-label="Especialidades">
          <span>Desarrollo web</span>
          <span>Automatización</span>
          <span>Análisis de datos</span>
        </div>
        <a className="contact-button" href="mailto:lalito9270@gmail.com">
          Hablemos de tu próximo proyecto <span aria-hidden="true">↗</span>
        </a>
      </div>
      <aside className="identity glass" aria-label="Datos de contacto">
        <div className="identity-top">
          <span>PERFIL PROFESIONAL</span>
          <span className="mini-mark" aria-hidden="true">EG.</span>
        </div>
        <div className="portrait-wrap">
          <img
            src="/eduardo.jpeg"
            width="307"
            height="331"
            alt="Retrato de Eduardo Francisco García"
            className="portrait"
          />
          <div className="photo-caption">EDUARDO F. GARCÍA</div>
        </div>
        <div className="identity-bottom">
          <p className="location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Ciudad de México, México
          </p>
          <a href="mailto:lalito9270@gmail.com">lalito9270@gmail.com <span aria-hidden="true">↗</span></a>
          <a href="tel:+522213697093">+52 221 369 70 93 <span aria-hidden="true">↗</span></a>
        </div>
      </aside>
    </section>
  )
}
