import './Header.css';
import headerLogo from '../../assets/imgheader.png';
import menuMobileBg from '../../assets/imgmenumobile.png';
import { useEffect, useState, useRef } from 'react';

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const NAV_ITEMS = [
  { id: 'inicio',    label: 'Início'    },
  { id: 'sobre',     label: 'Sobre'     },
  { id: 'planos',    label: 'Planos'    },
  { id: 'vantagens', label: 'Vantagens' },
  { id: 'suporte',   label: 'Suporte'   },
  { id: 'contato',   label: 'Contato'   },
];

const WHATSAPP_URL = "https://wa.me/5541999976337?text=Olá!%20Gostaria%20de%20contratar%20a%20PRFIBER";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueio de scroll robusto: salva posição e trava o body
  useEffect(() => {
    if (menuOpen && !isClosing) {
      // Salva a posição atual do scroll
      scrollYRef.current = window.scrollY;

      // Trava o body na posição atual
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura o body e volta para a posição salva
      const savedY = scrollYRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';

      if (savedY > 0) {
        window.scrollTo(0, savedY);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [menuOpen, isClosing]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setIsClosing(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleNavClick = (id) => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
      scrollTo(id);
    }, 300);
  };

  return (
    <header
      className={[
        'header',
        scrolled  ? 'scrolled'     : '',
        menuOpen  ? 'menu-is-open' : '',
        isClosing ? 'menu-closing' : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="header__inner">
        {/* Logo */}
        <a
          className="header__logo"
          href="#inicio"
          aria-label="Ir para o início — PRFIBER"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}
        >
          <img
            src={headerLogo}
            alt="PRFIBER"
            className="header__logo-img"
            loading="eager"
            fetchPriority="high"
          />
        </a>

        {/* Navegação */}
        <nav
          className={`header__nav${menuOpen ? ' open' : ''}${isClosing ? ' closing' : ''}`}
          aria-label="Navegação principal"
          id="main-nav"
          style={menuOpen ? { backgroundImage: `url(${menuMobileBg})` } : undefined}
        >
          <div className="nav-items-wrapper">
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
              onClick={closeMenu}
            >
              Contratar Agora
            </a>
          </div>
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
          onClick={() => {
            if (menuOpen) {
              closeMenu();
            } else {
              setMenuOpen(true);
            }
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}