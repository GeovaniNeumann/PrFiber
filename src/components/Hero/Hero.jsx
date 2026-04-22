import './Hero.css';
import heroImage from '../../assets/imghero.png';
import heroMobileImage from '../../assets/imgherosectionmobile.png';
import { useEffect, useState } from 'react';
import SEO from "../SEO";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // rAF garante que a transição CSS de entrada seja percebida pelo browser
    const raf = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* ADICIONADO bloco SEO */}
      <SEO 
        title="Internet Fibra Óptica no Paraná"
        description="Internet fibra óptica de verdade com velocidade real, sinal estável e atendimento que resolve. Conheça os planos PR Fiber e tenha a melhor conexão do Paraná."
        keywords="internet fibra óptica, PR Fiber, internet Paraná, fibra óptica, internet rápida, wi-fi estável, plano internet fibra"
      />
      
      <section className="hero" id="inicio" aria-label="Seção principal">
        {/* Background */}
        <div className="hero__background" aria-hidden="true">
          <div className="hero__overlay" />
          <div className="hero__bg-gradient" />

          {/* LCP: eager + fetchpriority para imagem acima da dobra */}
          <picture>
            <source media="(max-width: 768px)" srcSet={heroMobileImage} />
            <img
              src={heroImage}
              alt="PR Fiber - Internet Fibra Óptica de alta velocidade"
              className="hero__bg-image"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        {/* Glows decorativos */}
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />

        {/* Conteúdo principal */}
        <div className={`hero__content${isVisible ? ' visible' : ''}`}>
          <div className="hero__badge" aria-label="Destaque">
            <span className="badge-dot" aria-hidden="true" />
            Fibra Óptica de Verdade
            <span className="badge-dot" aria-hidden="true" />
          </div>

          <h1 className="hero__title">
            Internet que não{' '}
            <span className="hero__title--accent">te deixa na mão</span>.
          </h1>

          <p className="hero__subtitle">
            Velocidade real, sinal estável e atendimento que resolve.{' '}
            <strong>Bem-vindo à PR Fiber</strong>, conectando o Paraná com qualidade.
          </p>

          <div className="hero__actions">
            <button
              onClick={() => scrollTo('planos')}
              className="btn btn--primary btn--lg"
              type="button"
            >
              <span>Ver Planos</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="https://wa.link/ugkrr3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--lg"
              aria-label="Fale conosco no WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale no WhatsApp
            </a>
          </div>

          {/* Indicadores de confiança */}
          <div className="hero__trust" aria-label="Diferenciais">
            <div className="trust-item">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M20 6L9 17L4 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Clientes satisfeitos</span>
            </div>
            <div className="trust-item">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 6v6l4 2" strokeWidth="2" />
              </svg>
              <span>Suporte 24/7</span>
            </div>
            <div className="trust-item">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeWidth="2"
                />
              </svg>
              <span>99.8% Uptime</span>
            </div>
          </div>
        </div>

        {/* Scroll hint — button semântico, não div clicável */}
        <button
          className="hero__scroll-hint"
          onClick={() => scrollTo('planos')}
          type="button"
          aria-label="Rolar para ver os planos"
        >
          <span>Conheça os planos</span>
          <div className="hero__arrow" aria-hidden="true">
            <span />
          </div>
        </button>
      </section>
    </>
  );
}