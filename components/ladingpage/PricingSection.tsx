import React from 'react';
import { Check } from 'lucide-react'; // Ou use um emoji/SVG se preferir

const plans = [
  {
    name: 'Starter',
    price: 'R$99',
    description: 'Ideal para pequenos negócios e autônomos.',
    features: ['1 Número de WhatsApp', 'Até 1.000 mensagens/mês', 'Fluxos de conversa básicos', 'Suporte via E-mail', 'Dashboard de métricas'],
    buttonText: 'Começar Agora',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'R$249',
    description: 'Para empresas em crescimento que precisam de escala.',
    features: ['3 Números de WhatsApp', 'Mensagens ilimitadas', 'Fluxos de conversa avançados', 'Suporte prioritário 24/7', 'Integração via Webhooks/API', 'Relatórios personalizados'],
    buttonText: 'Escolher Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    description: 'Soluções customizadas para grandes operações.',
    features: ['Números ilimitados', 'Infraestrutura dedicada', 'Gerente de conta exclusivo', 'SLA de 99.9%', 'Treinamento de equipe', 'Segurança avançada'],
    buttonText: 'Falar com Consultor',
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className='text-primary font-bold'>PREÇOS</h2>
          <h2 className="text-4xl font-extrabold text-slate-900">Planos que crescem com você</h2>
          <p className="mt-4 text-slate-600">Escolha a melhor opção para automatizar seu negócio.</p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col py-4 px-8 rounded-[2.5rem] bg-white transition-all duration-300 ${
                plan.highlight 
                ? 'border-2 border-green-500 shadow-[0_20px_50px_rgba(34,197,94,0.15)] scale-105 z-10' 
                : 'border border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Badge de Mais Popular */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Mais Popular
                </div>
              )}

              {/* Header do Plano */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-500 text-[10px] mt-2 leading-relaxed">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.price.includes('R$') && <span className="text-slate-500 font-medium">/mês</span>}
                </div>
              </div>

              {/* Lista de Funcionalidades */}
              <ul className="flex-1 space-y-2 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="mt-1 bg-green-100 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-[11px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botão de Ação */}
              <button className={`w-full py-2.5 rounded-2xl font-bold transition-all ${
                plan.highlight 
                ? 'bg-primary text-white hover:bg-green-600 shadow-lg shadow-green-200' 
                : 'bg-gray-50 text-slate-900 hover:bg-gray-100 border border-gray-200'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}