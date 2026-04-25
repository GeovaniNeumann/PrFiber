import './About.css';
import aboutImage from '../../assets/imgabout.webp';
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
  {
    title: 'Missão',
    desc: 'Oferecer internet de alta qualidade com atendimento humano, ágil e eficiente, garantindo a melhor experiência para nossos clientes com tecnologia de ponta e respeito em cada conexão.',
  },
  {
    title: 'Visão',
    desc: 'Ser reconhecida como a melhor provedora regional de internet fibra óptica, destacando-se pela excelência no atendimento, inovação tecnológica e confiança dos nossos clientes.',
  },
  {
    title: 'Valores',
    desc: 'Nossa atuação é pautada pelo atendimento humano e transparente, reafirmando diariamente nosso compromisso com a qualidade. Unimos agilidade e eficiência a uma inovação constante, sempre fundamentados no respeito ao cliente, na ética e na responsabilidade.',
  },
];

export default function About() {
  const [imgRef, imgVisible] = useInView();
  const [contentRef, contentVisible] = useInView();

  return (
    <section className="about" id="sobre">
      <div className="about__container">
        {/* Image */}
        <div ref={imgRef} className={`about__image ${imgVisible ? 'visible' : ''}`}>
          <div className="about__image-wrapper">
            <img src={aboutImage} alt="PR Fiber - Nossa Empresa" />
            <div className="about__experience">
              <span className="about__experience-number">100%</span>
              <span className="about__experience-text">Fibra<br />óptica</span>
            </div>
          </div>
        </div>

        {/* Content - CORRIGIDO */}
        <div ref={contentRef} className={`about__content ${contentVisible ? 'visible' : ''}`}>
          <span className="about__badge">✦ Quem somos</span>

          <h2 className="about__title">
            Tecnologia e inovação<br />
            <span className="about__title--accent">para conectar você</span>
          </h2>

          <p className="about__text">
            Nossa empresa nasce da determinação de seus fundadores, que sempre acreditaram que internet de qualidade vai além da tecnologia que envolve respeito e atenção ao cliente.
          </p>

          <p className="about__text">
            Desde o início, buscamos evoluir constantemente, investindo em <strong>tecnologia de ponta</strong> e na capacitação da nossa equipe. 
            Mas, acima de tudo, focamos no que muitas empresas deixaram de lado: o atendimento humano, próximo e eficiente.
          </p>

          <p className="about__text">
            <strong>Na PRFiber,</strong> você não fala com robôs. Você fala com pessoas.
            Nosso objetivo sempre foi sermos reconhecidos regionalmente pela qualidade dos nossos serviços. Hoje estamos em expansão, ampliando nossa cobertura e levando internet 100% fibra óptica com suporte técnico atualizado para cada vez mais pessoas.
          </p>

          <div className="about__pillars">
            {pillars.map(({ title, desc }, i) => (
              <div
                className="pillar"
                key={title}
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
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
            type="button"
          >
            Conheça nossos planos
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}