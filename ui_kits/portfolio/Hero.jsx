/* global React */
function Hero({ t }) {
  return (
    <section className="thHero" id="top">
      <div className="thHero-grid">
        <div className="thHero-text">
          <div className="thEyebrow">{t.hero.kicker}</div>
          <h1 className="thHero-headline">{t.hero.headline}</h1>
          <p className="thHero-sub">{t.hero.sub}</p>
          <div className="thHero-ctas">
            <a className="thBtn thBtn-primary" href="#contact">
              {t.hero.cta1}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <a className="thBtn thBtn-secondary" href="#" onClick={(e) => e.preventDefault()}>
              {t.hero.cta2}
            </a>
          </div>
        </div>
        <div className="thHero-portrait">
          <img src="../../assets/portrait.png" alt="Tom Huyghe" />
          <div className="thHero-portrait-tag">
            <span className="thDot" />
            {t.about.location}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
