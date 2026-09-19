export default function SkillCard({ icon, title, children }) {
  return (
    <article className="skill glass">
      <span className="skill-icon" aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      {children}
    </article>
  )
}
