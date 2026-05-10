/* global React */
const { useState, useEffect } = React;

function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"thNav" + (scrolled ? " is-scrolled" : "")}>
      <div className="thNav-inner">
        <a href="#top" className="thBrand">
          <span className="thCursor"></span>
          Tom Huyghe
        </a>
        <nav className="thNav-links">
          <a href="#work">{t.nav.work}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="thLang">
          <button
            className={lang === "en" ? "is-active" : ""}
            onClick={() => setLang("en")}
            aria-label="English">EN</button>
          <button
            className={lang === "fr" ? "is-active" : ""}
            onClick={() => setLang("fr")}
            aria-label="Français">FR</button>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
