/* global React */
function About({ t }) {
  return (
    <section className="thSection" id="about">
      <div className="thSection-inner">
        <div className="thEyebrow">{t.about.eyebrow}</div>
        <h2 className="thSection-title">{t.about.title}</h2>
        <p className="thSection-body" style={{ maxWidth: 720 }}>
          {t.about.body}
        </p>
        <div className="thPill">
          <span className="thDot thDot-success" />
          {t.about.pill}
        </div>
      </div>
    </section>
  );
}

function SkillsSplit({ t }) {
  const Col = ({ title, items }) => (
    <div className="thSkillCol">
      <h3 className="thSkillCol-title">{title}</h3>
      <dl className="thSkillList">
        {items.map((row, i) => (
          <div key={i} className="thSkillRow">
            <dt>{row.k}</dt>
            <dd>{row.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
  return (
    <section className="thSection" id="skills">
      <div className="thSection-inner">
        <div className="thEyebrow">{t.skills.eyebrow}</div>
        <h2 className="thSection-title">{t.skills.title}</h2>
        <div className="thSkillsSplit">
          <Col title={t.skills.embedded.title} items={t.skills.embedded.items} />
          <div className="thSkillsRule" />
          <Col title={t.skills.web.title} items={t.skills.web.items} />
        </div>
      </div>
    </section>
  );
}

window.About = About;
window.SkillsSplit = SkillsSplit;
