export default function Header({ onPrint }) {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Eduardo García, inicio">
        <span className="monogram">EG<span> /</span></span>
        <span className="brand-label">CURRÍCULUM VITAE</span>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#experiencia">Experiencia</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#formacion">Formación</a>
      </nav>
      <button className="print-button" type="button" id="print" onClick={onPrint}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z" />
          <path d="M16 11h1" />
        </svg>
        <span>Imprimir CV</span>
      </button>
    </header>
  )
}
