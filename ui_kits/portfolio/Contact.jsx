/* global React */
function Contact({ t }) {
  return (
    <section className="thSection thContact" id="contact">
      <div className="thSection-inner">
        <div className="thEyebrow">{t.contact.eyebrow}</div>
        <h2 className="thSection-title">{t.contact.title}</h2>
        <p className="thSection-body" style={{ maxWidth: 640 }}>{t.contact.body}</p>
        <div className="thContact-row">
          <a className="thBtn thBtn-primary" href={`mailto:${t.contact.mail}`}>
            {t.contact.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </a>
          <code className="thContact-mail">{t.contact.mail}</code>
        </div>
        <div className="thContact-socials">
          <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn ↗</a>
          <a href="#" onClick={(e) => e.preventDefault()}>GitHub ↗</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Malt ↗</a>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="thFooter">
      <div className="thFooter-inner">
        <span>{t.footer}</span>
        <span className="thFooter-meta">v1 · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

window.Contact = Contact;
window.Footer = Footer;
