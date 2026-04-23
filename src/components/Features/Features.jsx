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
    key: 'instalacao',
    title: 'Instalação rápida',
    desc: 'Equipe técnica qualificada para instalar sua internet sem enrolação. Você contratou, a gente instala.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    key: 'manutencao',
    title: 'Manutenção ágil',
    desc: 'Problemas resolvidos rápido. Nossa equipe técnica está sempre pronta para garantir sua conexão no ar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    key: 'atendimento',
    title: 'Atendimento humano (sem robôs)',
    desc: 'Aqui você fala com pessoas de verdade, não com robôs. Atendimento rápido, eficiente e que resolve.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    key: 'fidelidade',
    title: 'Sem fidelidade',
    desc: 'Você não é obrigado a ficar. Sem multas, sem contrato amarrado. Você só fica se estiver satisfeito.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    key: 'indicacao',
    title: 'Indique um amigo e ganhe benefícios',
    desc: 'Chame seus amigos para a PRFIBER e ganhe desconto na sua mensalidade. Quanto mais indica, mais vantagens.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    key: 'analise',
    title: 'Análise de localidade gratuita',
    desc: 'Sem compromisso. Verificamos se sua região tem cobertura e qual a melhor solução para você.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
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
          <span className="features__badge">✦ Vantagens PRFIBER</span>
          <h2 className="features__title">
            Por que escolher a <span className="features__title--accent">PRFiber</span>?
          </h2>
          <p className="features__subtitle">
            Internet de verdade com benefícios exclusivos para você. Veja o que torna a PRFIBER diferente das outras operadoras e por que nossos clientes nos escolhem para conectar suas vidas.
          </p>
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