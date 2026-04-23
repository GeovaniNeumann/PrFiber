import PlanCard from './PlanCard';
import './Plans.css';

const plans = [
  {
    speed: '300',
    fullPrice: 'R$ 99,90',
    discountPrice: 'R$ 89,90',
    tag: 'Plano Essencial',
    regularPrice: 'R$ 99,90',
    discountNote: 'Pagamento em dia',
    features: ['Fibra óptica dedicada', 'Suporte e manutenção gratuitos', 'Sem franquia de dados', 'Atendimento prioritário', 'Sem burocracia', 'Sem consulta ao SPC']
  },
  {
    speed: '500',
    fullPrice: 'R$ 109,90',
    discountPrice: 'R$ 99,90',
    tag: '⭐ Mais Popular',
    regularPrice: 'R$ 109,90',
    discountNote: 'Pagamento em dia',
    features: ['Fibra óptica dedicada', 'Wi-Fi 6 incluso', 'Suporte prioritário', 'Sem franquia de dados', 'Atendimento humano', 'Sem fidelidade']
  },
  {
    speed: '700',
    fullPrice: 'R$ 139,00',
    discountPrice: 'R$ 129,90',
    tag: 'Ultra Velocidade',
    regularPrice: 'R$ 139,00',
    discountNote: 'Pagamento em dia',
    features: ['Fibra óptica dedicada', 'Wi-Fi 6 incluso', 'Máxima performance', 'Suporte prioritário 24/7', 'Sem franquia', 'Atendimento VIP']
  },
  {
    speed: '🎮',
    name: 'Gamer',
    discountPrice: 'Plano Gamer',
    tag: 'Baixa Latência',
    isCustom: true,
    customMessage: 'Consulte nossos colaboradores para o plano ideal para você',
    features: ['Rota dedicada para games', 'Priorização de tráfego', 'Suporte especializado 24/7', 'IP fixo disponível', 'Latência ultra baixa']
  },
  {
    speed: '🏢',
    name: 'Empresarial',
    discountPrice: 'Empresarial ',
    tag: 'Empresas',
    isCustom: true,
    customMessage: 'Planos sob medida conforme a demanda do seu negócio',
    features: ['SLA personalizado', 'Suporte prioritário 24/7', 'Link dedicado', 'IP fixo incluso', 'Segurança avançada']
  }
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
            Fibra óptica de verdade com preço justo. Pague em dia e garanta o melhor desconto.
          </p>
        </header>

        <div className="plans__grid" role="list" aria-label="Planos PRFIBER">
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