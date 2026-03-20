// Dados das Métricas (para fácil edição)
const metrics = [
  { label: 'TOTAL MENSAGENS', value: '12.4k', color: 'text-green-500' },
  { label: 'NOVOS LEADS', value: '+842', color: 'text-blue-500' },
  { label: 'TAXA DE RESP.', value: '99.2%', color: 'text-purple-500' },
];

export default function BrowserMockup() {
  return (
    <div className="bg-white flex items-center justify-center p-2 rounded-2xl">
      
      {/* Container Principal: Define a largura responsiva do navegador */}
      {/* Começa com largura total no mobile e max-w-5xl em telas grandes */}
      <div className="relative w-full max-w-xl">
        
        {/* =======================================================
            NOTIFICAÇÃO FLUTUANTE (O Balãozinho "Novo Cliente")
            O segredo: position absolute + coordenadas negativas
            ======================================================= */}
        <div className="absolute -top-10 -right-4 z-20 bg-white p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-50 flex items-center gap-4 hover:-translate-y-1 transition-transform">
          {/* Ícone Container */}
          <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center border border-green-100 shadow-inner">
            <span className="text-sm text-green-500">👤</span>
          </div>
          {/* Texto Notificação */}
          <div className="space-y-1">
            <h4 className="text-slate-900 font-bold text-[10px] leading-tight">Novo Cliente</h4>
            <p className="text-slate-500 text-[7px]">Há 2 minutos</p>
          </div>
        </div>

        {/* =======================================================
            MOLDURA DO NAVEGADOR
            Sombra pesada, bordas arredondadas e fundo branco
            ======================================================= */}
        <div className="relative bg-white rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
          
          {/* BARRA DE TÍTULO (A "Top Bar") */}
          <div className="h-8 bg-white border-b border-gray-100 flex items-center px-6 gap-6">
            {/* Bolinhas Coloridas (Mac Style) */}
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#FF5F57] rounded-full"></div>
              <div className="w-2 h-2 bg-[#FEBC2E] rounded-full"></div>
              <div className="w-2 h-2 bg-[#28C840] rounded-full"></div>
            </div>
            {/* Campo da URL */}
            <div className="flex-1 bg-gray-50/50 p-2 rounded-xl border border-gray-100 text-slate-400 text-[9px] font-medium tracking-tight">
              dashboard.fasty.com/analytics
            </div>
          </div>

          {/* CONTEÚDO DO DASHBOARD (A "Tela") */}
          <div className="p-4 bg-white space-y-4">
            
            {/* --- CONTAINER GRID DAS MÉTRICAS ---
                Crucial: Define o comportamento responsivo dos 3 cards.
                gap-6 e items-stretch garantem alinhamento e espaçamento. */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
              
              {/* Mapeamento dos 3 Cards */}
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-2 rounded-2xl border border-gray-100 flex flex-col space-y-2 group hover:bg-white hover:border-gray-200 transition-colors"
                >
                  <span className="text-slate-500 text-[8px] font-bold tracking-wider uppercase">
                    {metric.label}
                  </span>
                  <span className={`text-sm font-extrabold tracking-tight ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* ÁREA DE CONTEÚDO VAZIA (PlaceHolder do Gráfico)
                Uma div simples que ocupa o espaço restante com fundo cinza. */}
            <div className="w-full h-[200px] bg-gray-50 p-4 rounded-3xl border border-gray-100">
              {/* Aqui entraria o gráfico real */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}