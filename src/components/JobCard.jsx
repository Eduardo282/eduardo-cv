export default function JobCard({ number, period, badge, badgeType, children }) {
  return (
    <article className="job glass">
      <div className="job-meta">
        <span className="job-number">{number}</span>
        <p>{period}</p>
        {badgeType === 'current' ? (
          <span className="current">{badge}</span>
        ) : badge ? (
          <span className="org-short">{badge}</span>
        ) : null}
      </div>
      <div className="job-body">
        {children}
      </div>
    </article>
  )
}
