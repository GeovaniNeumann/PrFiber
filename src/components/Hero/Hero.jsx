import './Hero.css';
import { useEffect, useState } from 'react';
import SEO from "../SEO";

// Desktop images
import logoImage from '../../assets/carrosselhero/logo.png';
import familiaImage from '../../assets/carrosselhero/filme.png';
import gamerImage from '../../assets/carrosselhero/gamer.png';
import homeImage from '../../assets/carrosselhero/home.png';

// Mobile images
import img1mobile from '../../assets/heromobileimg/img1mobile.png';
import img2mobile from '../../assets/heromobileimg/img2mobile.png';
import img3mobile from '../../assets/heromobileimg/img3mobile.png';
import img4mobile from '../../assets/heromobileimg/img4mobile.png';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const slidesDesktop = [
  {
    id: 1,
    title: 'PRFIBER - Internet de Verdade',
    subtitle: 'Fibra óptica 100% dedicada com atendimento humano e sem burocracia.',
    image: logoImage,
    trust: ['Atendimento humano', 'Sem fidelidade', 'Fibra óptica'],
  },
  {
    id: 2,
    title: 'Internet para toda família',
    subtitle: 'Streaming, redes sociais e videochamadas sem travamentos.',
    image: familiaImage,
    trust: ['Streaming em 4K', 'Videochamadas estáveis', 'Redes sociais'],
  },
  {
    id: 3,
    title: 'Zero latência para gamers',
    subtitle: 'Ping baixo e conexão estável para você dominar todas as partidas.',
    image: gamerImage,
    trust: ['Baixa latência', 'Conexão estável', 'Sem lag'],
  },
  {
    id: 4,
    title: 'Home Office produtivo',
    subtitle: 'Reuniões sem interrupções e upload rápido para seus arquivos.',
    image: homeImage,
    trust: ['VPN estável', 'Upload rápido', 'Confiabilidade'],
  },
];

const slidesMobile = [
  {
    id: 1,
    title: 'PRFIBER - Internet de Verdade',
    subtitle: 'Fibra óptica 100% dedicada com atendimento humano e sem burocracia.',
    image: img1mobile,  // img1mobile = LOGO ✅
    trust: ['Atendimento humano', 'Sem fidelidade', 'Fibra óptica'],
  },
  {
    id: 2,
    title: 'Internet para toda família',
    subtitle: 'Streaming, redes sociais e videochamadas sem travamentos.',
    image: img2mobile,  // img2mobile = FAMÍLIA ✅
    trust: ['Streaming em 4K', 'Videochamadas estáveis', 'Redes sociais'],
  },
  {
    id: 3,
    title: 'Zero latência para gamers',
    subtitle: 'Ping baixo e conexão estável para você dominar todas as partidas.',
    image: img3mobile,  // img3mobile = GAMER ✅
    trust: ['Baixa latência', 'Conexão estável', 'Sem lag'],
  },
  {
    id: 4,
    title: 'Home Office produtivo',
    subtitle: 'Reuniões sem interrupções e upload rápido para seus arquivos.',
    image: img4mobile,  // img4mobile = HOME OFFICE ✅
    trust: ['VPN estável', 'Upload rápido', 'Confiabilidade'],
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 768px)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

export default function Hero() {
  const isMobile = useIsMobile();
  const slides = isMobile ? slidesMobile : slidesDesktop;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setCurrentSlide(0);
    setNextSlide(1);
    setIsTransitioning(false);
  }, [isMobile]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        const next = (currentSlide + 1) % slides.length;
        setNextSlide(next);
        setTimeout(() => {
          setCurrentSlide(next);
          setIsTransitioning(false);
        }, 500);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setNextSlide(index);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const current = slides[currentSlide];
  const next = slides[nextSlide];

  return (
    <>
      <SEO
        title="PRFIBER - Internet Fibra Óptica no Paraná | Atendimento Humano"
        description="Internet fibra óptica de verdade com atendimento humano, sem burocracia e sem fidelidade. Planos a partir de R$ 89,90."
        keywords="internet fibra óptica, PRFIBER, internet Paraná, fibra óptica, internet rápida"
      />

      <section className="hero" id="inicio" aria-label="Seção principal PRFIBER">
        <div className="hero__background" aria-hidden="true">
          <div className="hero__overlay" />
          <div className="hero__bg-gradient" />

          <img
            src={current.image}
            alt={current.title}
            className={`hero__bg-image hero__bg-image--current ${isTransitioning ? 'fade-out' : 'fade-in'}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          {isTransitioning && (
            <img
              src={next.image}
              alt={next.title}
              className="hero__bg-image hero__bg-image--next fade-in"
              loading="eager"
              decoding="async"
            />
          )}
        </div>

        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />

        <div className={`hero__content ${isVisible ? 'visible' : ''} ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <h1 className="hero__title">{current.title}</h1>
          <p className="hero__subtitle">{current.subtitle}</p>

          <div className="hero__price-highlight">
            Planos a partir de <strong>R$ 89,90/mês</strong>
          </div>

          <div className="hero__actions">
            <button
              onClick={() => scrollTo('planos')}
              className="btn btn--primary btn--lg"
              type="button"
            >
              <span>Ver Planos</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="https://wa.me/5541999976337?text=Olá!%20Gostaria%20de%20contratar%20a%20PRFIBER"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--lg"
              aria-label="Falar no WhatsApp - Contratar PRFIBER"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        <div className="hero__trust" aria-label="Diferenciais PRFIBER">
          {current.trust.map((item, index) => (
            <div className="trust-item" key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="hero__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero__dot${currentSlide === index ? ' active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}