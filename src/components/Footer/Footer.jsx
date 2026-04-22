import './Footer.css';
import footerLogo from '../../assets/imgheader.png';
import anatelLogo from '../../assets/anatel.png';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/* SVGs inline como componentes — sem dependência de biblioteca,
   sem emojis lidos por screen readers */
const IconPhone = () => (
  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconMail = () => (
  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ stroke: 'none' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const IconSpeed = () => (
  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

export default function Footer() {
  return (
    <>
      {/* CORREÇÃO: âncora "contato" separada do <footer> landmark.
          O <footer> não deve ter id de navegação — mistura landmark
          semântico com âncora de scroll, causando ambiguidade para
          screen readers e posicionamento incorreto do scroll. */}
      <div id="contato" aria-hidden="true" style={{ position: 'relative', top: '-80px' }} />

      <footer className="footer" aria-label="Rodapé do site">
        <div className="footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo" aria-label="PR Fiber — voltar ao topo">
              <img
                src={footerLogo}
                alt="PR Fiber"
                className="footer__logo-img"
                loading="lazy"
              />
            </a>
            <p className="footer__tagline">
              Conectando o Paraná com velocidade,<br />estabilidade e respeito ao cliente.
            </p>
            <div className="footer__anatel" aria-label="Certificação ANATEL">
              <img
                src={anatelLogo}
                alt="Logotipo ANATEL"
                className="footer__anatel-img"
                loading="lazy"
              />
              <span>Operadora homologada pela ANATEL</span>
            </div>
          </div>

          {/* Empresa */}
          <nav className="footer__col" aria-label="Navegação — Empresa">
            <h4>Empresa</h4>
            <ul>
              <li>
                <button type="button" onClick={() => scrollTo('empresa')} className="footer-link">
                  Quem Somos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('vantagens')} className="footer-link">
                  Tecnologia
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('planos')} className="footer-link">
                  Planos
                </button>
              </li>
            </ul>
          </nav>

          {/* Cliente */}
          <nav className="footer__col" aria-label="Navegação — Cliente">
            <h4>Cliente</h4>
            <ul>
              <li>
                <a
                  href="http://i9fibras.ispfycloud.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Acessar Área do Cliente (abre em nova aba)"
                >
                  Área do Cliente
                </a>
              </li>
              <li>
                <a
                  href="http://i9fibras.ispfycloud.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emitir 2ª Via do Boleto (abre em nova aba)"
                >
                  2ª Via do Boleto
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5541997152514"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suporte via WhatsApp (abre em nova aba)"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </nav>

          {/* Contato — CORREÇÃO: emojis removidos, substituídos por SVGs com aria-hidden */}
          <div className="footer__col">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="tel:+5541999976337" aria-label="Ligar para (41) 99997-6337">
                  <IconPhone />
                  (41) 99997-6337
                </a>
              </li>
              <li>
                <a href="mailto:financeiro.prfiber@gmail.com" aria-label="Enviar e-mail para financeiro.prfiber@gmail.com">
                  <IconMail />
                  financeiro.prfiber@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5541999976337"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar via WhatsApp (abre em nova aba)"
                >
                  <IconWhatsApp />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="http://fast.com/pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Teste de Velocidade no Fast.com (abre em nova aba)"
                >
                  <IconSpeed />
                  Teste de Velocidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} PR Fiber. Todos os direitos reservados.</p>
          <div className="footer__dev">
            <span>Desenvolvido por</span>
            <a
              href="https://portifolio-geovani.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link"
              aria-label="Portfólio de Geovani Neumann (abre em nova aba)"
            >
              Geovani Neumann
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}