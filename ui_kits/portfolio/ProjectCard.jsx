/* global React */
function ProjectCard({ p, lang, featured }) {
  const summary = p.summary[lang];
  const statusLabel = {
    shipped: { en: "SHIPPED", fr: "LIVRÉ" },
    research: { en: "RESEARCH", fr: "RECHERCHE" },
    inprogress: { en: "IN PROGRESS", fr: "EN COURS" },
  }[p.status];
  return (
    <a className={"thPCard" + (featured ? " is-featured" : "")} href="#" onClick={(e) => e.preventDefault()}>
      <div
        className="thPCard-img"
        style={{ backgroundImage: `url(${p.texture})` }}>
        <div className="thPCard-img-veil" />
        <div className="thPCard-img-name">{p.name}</div>
      </div>
      <div className="thPCard-body">
        <div className="thPCard-meta">
          <span>{p.track} · {p.year}</span>
          <span className={"thPCard-status thPCard-status-" + p.status}>● {statusLabel[lang]}</span>
        </div>
        <h3 className="thPCard-title">{p.name}</h3>
        <p className="thPCard-summary">{summary}</p>
        <div className="thPCard-tags">
          {p.tags.map((tag) => (<span key={tag} className="thChip">{tag}</span>))}
        </div>
      </div>
    </a>
  );
}

function ProjectGrid({ t, lang, projects }) {
  return (
    <section className="thSection" id="work">
      <div className="thSection-inner">
        <div className="thEyebrow">{t.work.eyebrow}</div>
        <h2 className="thSection-title">{t.work.title}</h2>
        <div className="thPGrid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} lang={lang} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.ProjectCard = ProjectCard;
window.ProjectGrid = ProjectGrid;
