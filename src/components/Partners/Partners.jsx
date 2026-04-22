import './Partners.css';
import { useState, useEffect, useRef, useCallback } from 'react';

import img1 from '../../assets/carrossel/imagem1.png';
import img2 from '../../assets/carrossel/imagem2.png';
import img3 from '../../assets/carrossel/imagem3.png';
import img4 from '../../assets/carrossel/imagem4.png';
import img5 from '../../assets/carrossel/imagem5.png';
import img6 from '../../assets/carrossel/imagem6.png';
import img7 from '../../assets/carrossel/imagem7.png';
import img8 from '../../assets/carrossel/imagem8.png';

const partners = [
  { id: 1, src: img1, alt: 'Parceiro 1' },
  { id: 2, src: img2, alt: 'Parceiro 2' },
  { id: 3, src: img3, alt: 'Parceiro 3' },
  { id: 4, src: img4, alt: 'Parceiro 4' },
  { id: 5, src: img5, alt: 'Parceiro 5' },
  { id: 6, src: img6, alt: 'Parceiro 6' },
  { id: 7, src: img7, alt: 'Parceiro 7' },
  { id: 8, src: img8, alt: 'Parceiro 8' },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = partners.length - itemsPerView;

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 3500);
    return () => clearInterval(intervalRef.current);
  }, [next, paused]);

  const goTo = (i) => {
    setCurrentIndex(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 3500);
  };

  const slideWidth = 100 / itemsPerView;
  const gap = 24;

  return (
    <section className="partners" id="parceiros">
      <div className="partners__container">
        <div className="partners__header">
          <span className="partners__badge">PARCEIROS</span>
          <h2 className="partners__title">
            Nossos <span className="partners__title--accent">Parceiros</span>
          </h2>
          <p className="partners__subtitle">Empresas que confiam e colaboram com a PR Fiber</p>
        </div>

        <div
          className="partners__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="partners__track">
            <div
              className="partners__slides"
              style={{
                transform: `translateX(calc(-${currentIndex * slideWidth}% - ${currentIndex * gap / itemsPerView}px))`,
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="partners__slide"
                  style={{ flex: `0 0 calc(${slideWidth}% - ${gap * (itemsPerView - 1) / itemsPerView}px)` }}
                >
                  <div className="partner-card">
                    <img src={partner.src} alt={partner.alt} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="partners__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`partners__dot${currentIndex === i ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}