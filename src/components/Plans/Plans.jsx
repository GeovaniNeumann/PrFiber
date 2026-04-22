import PlanCard from './PlanCard';
import './Plans.css';

const plans = [
  {
    speed: '300',
    fullPrice: 'R$ 99,90',
    discountPrice: 'R$ 89,90',
    tag: 'Básico',
  },
  {
    speed: '500',
    fullPrice: 'R$ 109,90',
    discountPrice: 'R$ 99,90',
    tag: 'Mais Popular',
  },
  {
    speed: '700',
    fullPrice: 'R$ 139,90',
    discountPrice: 'R$ 129,90',
    tag: 'Ultra Speed',
  },
  {
    speed: 'Gamer',
    discountPrice: 'Plano Gamer',
    tag: 'Low Ping',
    isCustom: true,
    customMessage: 'Consulte nossos vendedores para o plano ideal para você',
  },
  {
    speed: 'Empresa',
    discountPrice: 'Plano Corporativo',
    tag: 'Empresas',
    isCustom: true,
    customMessage: 'Planos sob medida conforme a demanda do seu negócio',
  },
];

export default function Plans() {
  return (
    <section className="plans" id="planos" aria-labelledby="plans-title">
      <div className="plans__inner">
        <header className="plans__header">
          <span className="section-eyebrow">Escolha seu plano</span>
          <h2 className="section-title" id="plans-title">
            Internet para o seu ritmo
          </h2>
          <p className="section-sub">
            Pague em dia e ganhe desconto todo mês. Simples assim.
          </p>
        </header>

        <div className="plans__grid" role="list" aria-label="Planos disponíveis">
          {plans.map((plan, index) => (
            <div key={index} role="listitem">
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}