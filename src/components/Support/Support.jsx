import './Support.css';

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="28" height="28">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconHeadset = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const IconWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M20 6L9 17L4 12"/>
  </svg>
);

export default function Support() {
  const WHATSAPP_URL = "https://wa.me/5541997152514?text=Olá!%20Preciso%20de%20suporte%20técnico";
  
  const supportFeatures = [
    "Atendimento 24/7",
    "Suporte técnico especializado",
    "Resposta rápida",
    "Sem robôs, pessoas reais"
  ];

  return (
    <section className="support" id="suporte">
      <div className="support__inner">
        <div className="support__header">
          <span className="support__badge">Atendimento PRFIBER</span>
          <h2 className="support__title">
            Suporte <span className="support__title--accent">técnico</span>
          </h2>
          <p className="support__subtitle">
            Estamos prontos para te ajudar com agilidade e atendimento humano de verdade
          </p>
        </div>

        {/* Cards principais - WhatsApp e Telefone */}
        <div className="support__cards">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="support-card support-card--whatsapp">
            <div className="support-card__icon">
              <IconWhatsApp />
            </div>
            <div className="support-card__content">
              <h3>WhatsApp</h3>
              <p>Resposta rápida e atendimento humano</p>
              <span>Chamar agora <IconArrowRight /></span>
            </div>
          </a>

          <a href="tel:+5541997152514" className="support-card support-card--phone">
            <div className="support-card__icon">
              <IconPhone />
            </div>
            <div className="support-card__content">
              <h3>Central de Atendimento</h3>
              <p>(41) 99715-2514</p>
              <span>Ligar agora <IconArrowRight /></span>
            </div>
          </a>
        </div>

        {/* Features de suporte */}
        <div className="support__features">
          {supportFeatures.map((feature, index) => (
            <div className="support-feature" key={index}>
              <IconCheck />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Cards informativos */}
        <div className="support__info">
          <div className="support-info__item">
            <div className="support-info__icon">
              <IconClock />
            </div>
            <div className="support-info__text">
              <strong>Disponibilidade total</strong>
              <p>Atendimento 24 horas por dia, 7 dias por semana, incluindo feriados.</p>
            </div>
          </div>
          <div className="support-info__item">
            <div className="support-info__icon">
              <IconHeadset />
            </div>
            <div className="support-info__text">
              <strong>Atendimento humano</strong>
              <p>Você fala com pessoas reais, não com robôs. Resolvemos seu problema de verdade.</p>
            </div>
          </div>
          <div className="support-info__item">
            <div className="support-info__icon">
              <IconWrench />
            </div>
            <div className="support-info__text">
              <strong>Manutenção ágil</strong>
              <p>Equipe técnica qualificada para resolver seu problema rapidamente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}