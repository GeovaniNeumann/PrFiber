import './Header.css';
import headerLogo from '../../assets/imgheader.png';
import { useEffect, useState } from 'react';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// Labels atualizados conforme plano PRFIBER
const NAV_ITEMS = [
  { id: 'inicio',    label: 'Início'    },
  { id: 'sobre',     label: 'Sobre'     },
  { id: 'planos',    label: 'Planos'    },
  { id: 'vantagens', label: 'Vantagens' },
  { id: 'contato',   label: 'Contato'   },
];

// URL do WhatsApp - ALTERE PARA O NÚMERO CORRETO DA PRFIBER
const WHATSAPP_URL = "https://wa.me/5541999976337?text=Olá!%20Gostaria%20de%20contratar%20a%20PRFIBER";

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trava de scroll do body quando menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Fecha menu ao voltar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha menu com Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={[
        'header',
        scrolled   ? 'scrolled'      : '',
        menuOpen   ? 'menu-is-open'  : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="header__inner">
        {/* Logo */}
        <a className="header__logo" href="#inicio" aria-label="Ir para o início — PRFIBER">
          <img
            src={headerLogo}
            alt="PRFIBER"
            className="header__logo-img"
            loading="eager"
            fetchpriority="high"
          />
        </a>

        {/* Navegação */}
        <nav
          className={`header__nav${menuOpen ? ' open' : ''}`}
          aria-label="Navegação principal"
          id="main-nav"
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className="nav-link"
            >
              {label}
            </button>
          ))}

          {/* CTA visível apenas no menu mobile - WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contratar Agora
          </a>
        </nav>

        {/* CTA Desktop - WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline desktop-only"
          aria-label="Contratar PRFIBER pelo WhatsApp"
        >
           Contratar Agora
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}