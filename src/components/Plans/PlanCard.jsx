import { useEffect, useRef } from 'react';
import './Plans.css';

export default function PlanCard({ plan }) {
  const isCustom = plan.isCustom;
  const isFeatured = plan.tag === 'Mais Popular';
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

  return (
    <article
      ref={cardRef}
      className={`plan-card${isFeatured ? ' plan-card--featured' : ''}`}
      aria-label={`Plano ${plan.speed}${!isCustom ? ' MB/s' : ''}`}
    >
      {/* Badge */}
      {plan.tag && (
        <div className="plan-card__badge" aria-label={`Tag: ${plan.tag}`}>
          {plan.tag}
        </div>
      )}

      {/* Speed / Name */}
      <div className="plan-card__speed">
        <span className="plan-card__speed-num">{plan.speed}</span>
        {!isCustom && (
          <span className="plan-card__speed-unit" aria-label="megabytes por segundo">
            MB/s
          </span>
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
          aria-label={`Velocidade: ${plan.speed} MB/s`}
        >
          <div className="plan-card__fiber-fill" />
        </div>
      )}

      {/* Pricing */}
      {isCustom ? (
        <div className="plan-card__custom-pricing">
          <div className="plan-card__discount">
            <div className="plan-card__discount-badge">Consultar</div>
            <div className="plan-card__custom-price">{plan.discountPrice}</div>
            <p className="plan-card__custom-message">{plan.customMessage}</p>
          </div>
        </div>
      ) : (
        <div className="plan-card__pricing">
          <div className="plan-card__full-price">
            <span className="plan-card__full-label">Preço normal</span>
            <span className="plan-card__full-value" aria-label={`Preço normal ${plan.fullPrice}`}>
              {plan.fullPrice}
            </span>
          </div>
          <div className="plan-card__discount">
            <div className="plan-card__discount-badge">Pagamento em dia</div>
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
        <li>Fibra óptica dedicada</li>
        <li>IP fixo disponível</li>
        <li>Sem franquia de dados</li>
        <li>{isCustom ? 'Suporte prioritário 24/7' : 'Suporte prioritário'}</li>
        {isCustom && <li>SLA personalizado</li>}
      </ul>

      {/* CTA */}
      <a
        href="https://wa.link/ugkrr3"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn--full${isFeatured ? ' btn--primary' : ' btn--outline'}`}
        aria-label={
          isCustom
            ? `Falar com consultor sobre o Plano ${plan.speed}`
            : `Contratar o plano ${plan.speed} MB/s`
        }
      >
        {isCustom ? 'Falar com consultor' : 'Contratar agora'}
      </a>
    </article>
  );
}