import './AppCta.css';

const BAR_HEIGHTS = [65, 80, 95, 100, 88, 72, 55];

export default function AppCta() {
  return (
    <section className="app-cta" aria-labelledby="app-cta-title">
      {/* Decorativos — ocultos de screen readers */}
      <div className="app-cta__bg-particles" aria-hidden="true">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      {/* CORREÇÃO: glow sem modificador duplicava o seletor.
          Agora ambos usam modificadores --1 e --2 explícitos. */}
      <div className="app-cta__glow app-cta__glow--1" aria-hidden="true" />
      <div className="app-cta__glow app-cta__glow--2" aria-hidden="true" />

      <div className="app-cta__inner">
        {/* ── TEXTO ── */}
        <div className="app-cta__text">
          <span className="app-cta__badge" aria-label="App PR Fiber">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            APP PR FIBER
          </span>

          <h2 className="app-cta__title" id="app-cta-title">
            Gerencie sua internet<br />
            <span className="app-cta__title--gradient">na palma da mão</span>
          </h2>

          <p className="app-cta__description">
            Tenha controle total da sua conta, acompanhe sua velocidade,
            pague boletos e solicite suporte técnico — tudo em um só lugar,
            de forma rápida e segura.
          </p>

          {/* CORREÇÃO: feature-items eram <div> — semanticamente lista de benefícios */}
          <ul className="app-cta__features" aria-label="Funcionalidades do app">
            <li className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 6L9 17L4 12" strokeLinecap="round"/>
              </svg>
              <span>2ª via de boleto</span>
            </li>
            <li className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2" strokeLinecap="round"/>
              </svg>
              <span>Velocidade em tempo real</span>
            </li>
            <li className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round"/>
              </svg>
              <span>Suporte 24/7</span>
            </li>
          </ul>

          {/* CORREÇÃO: store buttons sem aria-label descritivo */}
          <div className="app-cta__buttons">
            <a
              href="https://apps.apple.com/br/app/app-provedor/id1564606498"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn store-btn--apple"
              aria-label="Baixar PR Fiber na App Store"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.35.74 3.16.74.83 0 2.38-.91 4.01-.77 1.5.12 2.87.84 3.62 2.28-3.27 1.97-2.75 6.61.21 7.83-.67 1.84-1.54 3.64-3 5.8M13 3.5c.12-2.05 1.85-3.5 3.82-3.5.15 2.43-2.08 4.08-3.82 3.5z"/>
              </svg>
              <div className="store-btn__label">
                <span className="store-btn__sub">Baixar na</span>
                <span className="store-btn__name">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=br.codize.appprovedor"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn store-btn--google"
              aria-label="Baixar PR Fiber no Google Play"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76c.28.16.6.19.9.09l11.35-6.55-2.43-2.43-9.82 8.89zm15.68-15.3L4.38.65C4.08.49 3.75.5 3.47.66L13.12 10.3l5.74-1.84zM1.94 1.6C1.68 1.87 1.5 2.25 1.5 2.73v18.54c0 .48.18.86.44 1.13l.08.07L12.24 12l-.08-.08L1.94 1.6zm18.98 9.3l-2.56-1.48-2.74.87L18.8 13.6l2.12-1.22c.6-.35.6-1.23 0-1.58z"/>
              </svg>
              <div className="store-btn__label">
                <span className="store-btn__sub">Disponível no</span>
                <span className="store-btn__name">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* ── PHONE MOCKUP
            CORREÇÃO: aria-hidden="true" no bloco inteiro — é decorativo,
            screen readers não devem ler "487MB/s Online Excelente" como conteúdo real ── */}
        <div className="app-cta__mockup" aria-hidden="true">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-ui">
                <div className="phone-ui__header">
                  <span className="status-dot" />
                  PR Fiber
                </div>

                <div className="phone-ui__welcome">
                  <span className="phone-ui__welcome-sub">Olá, usuário</span>
                  <span className="phone-ui__welcome-name">Bem-vindo de volta!</span>
                </div>

                <div className="phone-ui__speed">
                  <div className="phone-ui__speed-label">Velocidade atual</div>
                  <div className="phone-ui__speed-value">
                    487<span className="phone-ui__speed-unit">MB/s</span>
                  </div>
                </div>

                <div className="phone-ui__bars">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="phone-ui__bar"
                      style={{ height: `${h}%` }}
                    >
                      <div className="bar-glow" />
                    </div>
                  ))}
                </div>

                <div className="phone-ui__status">
                  {/* CORREÇÃO: emoji 🟢 substituído por SVG — evita leitura
                      "círculo verde" por screen readers e é mais performático */}
                  <span className="status-icon-svg" />
                  Online — Excelente
                </div>

                <nav className="phone-ui__menu">
                  <div className="menu-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-5v-8H7v8H5a2 2 0 0 1-2-2z"/>
                    </svg>
                    <span className="menu-item__label">Início</span>
                  </div>
                  <div className="menu-item active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span className="menu-item__label">Conta</span>
                  </div>
                  <div className="menu-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a10 10 0 1 0 10 10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span className="menu-item__label">Suporte</span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}