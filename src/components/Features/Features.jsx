import './Features.css';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const features = [
  {
    key: 'wifi6',
    title: 'Wi-Fi 6 Incluso',
    desc: 'Roteador de última geração com cobertura total, mais velocidade e menor interferência para sua casa ou escritório.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    key: 'humano',
    title: 'Atendimento 100% Humano',
    desc: 'Nada de robôs ou menus infinitos. Fale com especialistas reais que entendem sua necessidade e resolvem na hora.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    key: 'instalacao',
    title: 'Instalação Rápida',
    desc: 'Equipe técnica própria e ágil. Agilidade na instalação sem burocracia para você conectar em até 24h.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    key: 'manutencao',
    title: 'Manutenção Expressa',
    desc: 'Suporte técnico local com resposta imediata. Se algo sair do padrão, nossa equipe vai até você com prioridade.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    key: 'app',
    title: 'Gestão pelo App',
    desc: 'Acesse sua conta, visualize boletos e solicite suporte direto pelo celular.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    key: 'desconto',
    title: 'Desconto Fidelidade',
    desc: 'Pague em dia e garanta preço especial todo mês. Sem burocracia.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function Features() {
  const [gridRef, gridVisible] = useInView();

  return (
    <section className="features" id="vantagens">
      <div className="features__inner">
        <header className="features__header">
          <span className="features__badge">DIFERENCIAIS</span>
          <h2>Por que escolher a PR Fiber?</h2>
          <p>Tecnologia de ponta com benefícios exclusivos para você</p>
        </header>

        <div ref={gridRef} className={`features__grid${gridVisible ? ' visible' : ''}`}>
          {features.map(({ key, title, desc, icon }, i) => (
            <div
              className="feature-card"
              key={key}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="feature-card__icon-wrapper">
                <div className="feature-card__icon">{icon}</div>
              </div>
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}