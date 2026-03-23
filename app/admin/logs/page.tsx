'use client'

import { Filter, RefreshCcw, AlertCircle, CheckCircle, Clock, ChevronRight, BarChart3 } from 'lucide-react';
// Se usar Recharts:
import { ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';

// Dados simulados para o gráfico de métricas
const errorMetricsData = [
  { time: '00:00', errors: 50 },
  { time: '03:00', errors: 20 },
  { time: '06:00', errors: 10 },
  { time: '09:00', errors: 25 },
  { time: '12:00', errors: 80 }, // Pico
  { time: '15:00', errors: 40 },
  { time: '18:00', errors: 15 },
  { time: '21:00', errors: 30 },
  { time: '23:59', errors: 10 },
];

// Dados simulados para os logs
const logsData = [
  {
    icon: AlertCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    title: 'Falha na autenticação do Webhook',
    client: 'Tech Solutions',
    timestamp: '2 min atrás',
  },
  {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    title: 'Mensagem enviada com sucesso',
    client: 'Green Market',
    timestamp: '5 min atrás',
  },
  {
    icon: Clock,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
    title: 'Limite de tokens atingido (80%)',
    client: 'Fitness Plus',
    timestamp: '12 min atrás',
  },
  {
    icon: AlertCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    title: 'API do WhatsApp retornou erro 400',
    client: 'Tech Solutions',
    timestamp: '15 min atrás',
  },
  {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    title: 'Novo lead capturado',
    client: 'Green Market',
    timestamp: '22 min atrás',
  },
  {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    title: 'Sessão do WhatsApp restaurada',
    client: 'Fitness Plus',
    timestamp: '45 min atrás',
  },
];

// Dados simulados para o status do servidor
const serverStatusData = [
  { name: 'API Gateway', status: 'Operacional', color: 'text-primary' },
  { name: 'Worker IA', status: 'Operacional', color: 'text-primary' },
  { name: 'Banco de Dados', status: 'Operacional', color: 'text-primary' },
];

export default function LogsPage() {
  // --- CUSTOMIZAÇÃO DA COR PRIMÁRIA ---
  // Substitua as classes abaixo pelas classes da sua cor primária configurada.
  // Exemplo: Se sua cor primária for 'violet', use 'text-violet-600', 'bg-violet-600', etc.
  const primaryText = 'text-primary'; // Ex: text-primary-600
  const primaryBg = 'bg-primary';     // Ex: bg-primary-600
  const primaryHoverBg = 'hover:bg-primary/80'; // Ex: hover:bg-primary-700
  // -------------------------------------

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 text-slate-900 font-sans">
      
      {/* Cabeçalho */}
      <header className="flex items-center justify-between mb-10 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Logs & Monitoramento</h1>
          <p className="text-slate-600 mt-1">Acompanhe em tempo real a saúde do seu sistema.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium ${primaryText} hover:bg-slate-100 transition-colors shadow-sm`}>
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <button className={`flex items-center gap-2 px-5 py-2.5 rounded-xl ${primaryBg} ${primaryHoverBg} text-white font-medium transition-colors shadow-lg shadow-blue-500/20`}>
            <RefreshCcw className="w-4 h-4" />
            Atualizar
          </button>
        </div>
      </header>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Seção de Logs (Esquerda) */}
        <section className="xl:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm font-mono text-slate-600">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <span className="font-semibold text-slate-800">system_logs_stream</span>
            </div>
            <div className={`w-3 h-3 rounded-full ${primaryBg} animate-pulse shadow-md`}></div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {logsData.map((log, index) => {
              const LogIcon = log.icon;
              return (
                <div key={index} className="flex items-center justify-between gap-4 p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-full ${log.bgColor} ${log.color} flex items-center justify-center`}>
                      <LogIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-950">{log.title}</h3>
                      <p className="text-sm text-slate-600">
                        Cliente: <span className={`${primaryText} font-medium`}>{log.client}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500 font-medium text-right whitespace-nowrap">
                    {log.timestamp}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Seção de Status e Métricas (Direita) */}
        <aside className="space-y-8">
          
          {/* Status do Servidor */}
          <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-950 mb-6">Status do Servidor</h2>
            <div className="space-y-4">
              {serverStatusData.map((server, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <span className="text-base font-medium text-slate-800">{server.name}</span>
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full bg-green-500 shadow-md`}></span>
                    <span className={`text-sm font-semibold ${server.color}`}>{server.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Métricas de Erro (24h) */}
          <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-950">Métricas de Erro (24h)</h2>
                <BarChart3 className="w-6 h-6 text-red-400" />
            </div>
            
            <div className="h-40 w-full rounded-2xl p-4 bg-slate-50 border border-slate-100">
                {/* Integração com Recharts */}
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={errorMetricsData} barCategoryGap={2}>
                    <XAxis 
                        dataKey="time" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 10, fill: '#64748b' }} 
                        interval={2} 
                    />
                    <Bar 
                        dataKey="errors" 
                        radius={[4, 4, 0, 0]} 
                    />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </section>

        </aside>
      </div>
      
      {/* Rodapé Simples */}
      <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
        © 2024 Painel de Monitoramento do Sistema. Todos os direitos reservados.
      </footer>
    </div>
  );
}