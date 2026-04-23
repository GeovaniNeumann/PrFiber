import { useEffect, useRef } from 'react';
import './Plans.css';

export default function PlanCard({ plan }) {
  const isCustom = plan.isCustom;
  // Corrigido: verifica se o plano tem a tag "⭐ Mais Popular" (com a estrela)
  const isFeatured = plan.tag === '⭐ Mais Popular';
  const cardRef = useRef(null);

  // Animate fiber bar when card enters viewport
  useEffect(() => {
    if (isCustom) return;

    const card = cardRef.current;
    if (!card) return;

    const fill = parseInt(plan.speed, 10);
    const pct = Math.min((fill / 700) * 100, 100).toFixed(1);
    card.style.setProperty('--fill-width', `${pct}%`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(card);

    return () => observer.disconnect();
  }, [plan.speed, isCustom]);

  // WhatsApp URL - NÚMERO DA PRFIBER
  const WHATSAPP_URL = "https://wa.me/5541999976337?text=Olá!%20Gostaria%20de%20contratar%20o%20plano%20";

  const getWhatsAppLink = () => {
    if (isCustom) {
      return `https://wa.me/5541999976337?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${plan.name || plan.speed}%20da%20PRFIBER`;
    }
    return `${WHATSAPP_URL}${plan.speed}%20Mega%20da%20PRFIBER`;
  };

  return (
    <article
      ref={cardRef}
      className={`plan-card${isFeatured ? ' plan-card--featured' : ''}`}
      aria-label={`Plano ${plan.name || plan.speed}${!isCustom ? ' Mega' : ''} - PRFIBER`}
    >
      {/* Badge */}
      {plan.tag && (
        <div className="plan-card__badge" aria-label={`Destaque: ${plan.tag}`}>
          {plan.tag}
        </div>
      )}

      {/* Speed / Name */}
      <div className="plan-card__speed">
        {isCustom ? (
          <>
            <span className="plan-card__speed-num">{plan.speed}</span>
            <span className="plan-card__speed-unit">{plan.name}</span>
          </>
        ) : (
          <>
            <span className="plan-card__speed-num">{plan.speed}</span>
            <span className="plan-card__speed-unit">Mega</span>
          </>
        )}
      </div>

      {/* Progress bar */}
      {!isCustom && (
        <div
          className="plan-card__fiber-bar"
          role="progressbar"
          aria-valuenow={parseInt(plan.speed, 10)}
          aria-valuemin={0}
          aria-valuemax={700}
          aria-label={`Velocidade: ${plan.speed} Mega`}
        >
          <div className="plan-card__fiber-fill" />
        </div>
      )}

      {/* Pricing */}
      {isCustom ? (
        <div className="plan-card__custom-pricing">
          <div className="plan-card__discount">
            <div className="plan-card__discount-badge">📞 Sob Consulta</div>
            <div className="plan-card__custom-price">{plan.discountPrice}</div>
            <p className="plan-card__custom-message">{plan.customMessage}</p>
          </div>
        </div>
      ) : (
        <div className="plan-card__pricing">
          <div className="plan-card__full-price">
            <span className="plan-card__full-label">Em atraso</span>
            <span className="plan-card__full-value" aria-label={`Preço normal ${plan.fullPrice}`}>
              {plan.fullPrice}
            </span>
          </div>
          <div className="plan-card__discount">
            <div className="plan-card__discount-badge">✅ Pagamento em dia</div>
            <div
              className="plan-card__discount-price"
              aria-label={`Preço com desconto ${plan.discountPrice}`}
            >
              {plan.discountPrice}
            </div>
            <div className="plan-card__discount-label">por mês</div>
          </div>
        </div>
      )}

      {/* Features */}
      <ul className="plan-card__features" aria-label="Benefícios inclusos">
        {(plan.features || [
          'Fibra óptica dedicada',
          'Suporte e manutenção gratuitos',
          'Sem franquia de dados',
          'Atendimento prioritário',
          'Sem burocracia',
          'Sem consulta ao SPC'
        ]).map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn--full ${isFeatured ? 'btn--primary' : 'btn--outline'}`}
        aria-label={
          isCustom
            ? `Consultar preço do Plano ${plan.name || plan.speed} PRFIBER`
            : `Contratar plano ${plan.speed} Mega PRFIBER`
        }
      >
        {isCustom ? 'Falar com especialista' : 'Contratar agora'}
      </a>
    </article>
  );
}