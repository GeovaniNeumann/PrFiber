import './Partners.css';
import { useState, useEffect, useRef, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    text: 'Internet excelente, nunca mais tive dor de cabeça! O atendimento é rápido e resolve na hora.',
    rating: 5,
    location: 'Pinhais - PR',
  },
  {
    id: 2,
    name: 'Mariana Oliveira',
    text: 'Atendimento rápido de verdade! Saí da operadora antiga e não me arrependo. Fibra estável e sem quedas.',
    rating: 5,
    location: 'Pinhais - PR',
  },
  {
    id: 3,
    name: 'Rafael Souza',
    text: 'Melhor internet da região! Como gamer, a latência baixa fez toda diferença. Recomendo demais a PRFIBER.',
    rating: 5,
    location: 'Piraquara - PR',
  },
  {
    id: 4,
    name: 'Fernanda Lima',
    text: 'Atendimento humano como não vejo em lugar nenhum. Resolveram meu problema em minutos. Nota 10!',
    rating: 5,
    location: 'Pinhais - PR',
  },
  {
    id: 5,
    name: 'Ricardo Mendes',
    text: 'Instalação rápida e suporte de qualidade. Minha empresa agora tem internet estável e confiável.',
    rating: 5,
    location: 'Piraquara - PR',
  },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [next, paused]);

  const goTo = (i) => {
    setCurrentIndex(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  const slideWidth = 100 / itemsPerView;
  const gap = 24;

  return (
    <section className="partners" id="depoimentos">
      <div className="partners__container">
        <div className="partners__header">
          <span className="partners__badge">Prova Social</span>
          <h2 className="partners__title">
            Quem usa,{' '}
            <span className="partners__title--accent">recomenda</span>
          </h2>
          <p className="partners__subtitle">
            Veja o que nossos clientes estão dizendo sobre a PRFIBER
          </p>
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
                transform: `translateX(calc(-${currentIndex * slideWidth}% - ${(currentIndex * gap) / itemsPerView}px))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="partners__slide"
                  style={{
                    flex: `0 0 calc(${slideWidth}% - ${(gap * (itemsPerView - 1)) / itemsPerView}px)`,
                  }}
                >
                  <div className="testimonial-card">
                    <div
                      className="testimonial-card__stars"
                      aria-label={`${testimonial.rating} de 5 estrelas`}
                    >
                      {'★'.repeat(testimonial.rating)}
                      {'☆'.repeat(5 - testimonial.rating)}
                    </div>
                    <p className="testimonial-card__text">"{testimonial.text}"</p>
                    <div className="testimonial-card__author">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="partners__dots" role="tablist" aria-label="Navegar depoimentos">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`partners__dot${currentIndex === i ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Depoimento ${i + 1}`}
              role="tab"
              aria-selected={currentIndex === i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}