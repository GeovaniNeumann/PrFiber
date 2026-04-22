import './About.css';
import aboutImage from '../../assets/imgabout.png';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.2) {
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

const pillars = [
  { title: 'Missão', desc: 'Prover serviços tecnológicos e Internet de alta performance com excelência.' },
  { title: 'Visão', desc: 'Ser referência em prestação de serviços de internet na região.' },
  { title: 'Valores', desc: 'Ética, respeito, responsabilidade social e segurança.' },
];

export default function About() {
  const [imgRef, imgVisible] = useInView();
  const [contentRef, contentVisible] = useInView();

  return (
    <section className="about" id="empresa">
      <div className="about__container">
        <div ref={imgRef} className={`about__image ${imgVisible ? 'visible' : ''}`}>
          <div className="about__image-wrapper">
            <img src={aboutImage} alt="PR Fiber - Nossa Empresa" />
            <div className="about__experience">
              <span className="about__experience-number">100%</span>
              <span className="about__experience-text">Fibra<br />Óptica</span>
            </div>
          </div>
        </div>

        <div ref={contentRef} className={`about__content ${contentVisible ? 'visible' : ''}`}>
          <span className="about__badge">QUEM SOMOS</span>
          <h2 className="about__title">
            Tecnologia e inovação<br />
            <span className="about__title--accent">para conectar você</span>
          </h2>

          <p className="about__text">
            Nossa empresa traz na sua história a determinação dos seus fundadores.
            Desde o início estivemos em busca de melhorias tanto em tecnologia
            quanto na qualificação da nossa equipe.
          </p>

          <p className="about__text">
            Todas as decisões sempre foram tomadas com o objetivo de sermos reconhecidos
            regionalmente por oferecer <strong>serviços de qualidade</strong>. Atualmente
            nossa empresa se encontra em expansão, ampliando nossa área de cobertura e
            agregando novos serviços.
          </p>

          <div className="about__pillars">
            {pillars.map(({ title, desc }, i) => (
              <div className="pillar" key={title} style={{ transitionDelay: `${0.1 * i}s` }}>
                <div className="pillar__line" />
                <div className="pillar__content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            className="about__cta"
          >
            Conheça nossos planos
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}