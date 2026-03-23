import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

const clients = [
  {
    name: 'Tech Solutions',
    email: 'contact@techsolutions.com',
    plan: 'Premium',
    status: 'Ativo',
    messages: '12 500',
    date: '15/01/2024',
    initial: 'T',
    color: 'bg-blue-600'
  },
  {
    name: 'Green Market',
    email: 'finance@greenmarket.com',
    plan: 'Pro',
    status: 'Ativo',
    messages: '5 400',
    date: '10/02/2024',
    initial: 'G',
    color: 'bg-blue-800'
  },
  {
    name: 'Fitness Plus',
    email: 'admin@fitnessplus.com',
    plan: 'Basic',
    status: 'Inativo',
    messages: '1 200',
    date: '05/03/2024',
    initial: 'F',
    color: 'bg-blue-900'
  },
];

export default function ClientTable() {
  return (
    <div className="text-slate-300 font-sans">
      <div className="max-w-6xl mx-auto  rounded-xl border border-slate-400 overflow-hidden">
        
        {/* Barra de Busca */}
        <div className="p-4 border-b border-slate-400">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            <input 
              type="text" 
              placeholder="Buscar por nome ou email..." 
              className="w-full border border-slate-600 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-slate-600 border-b border-slate-400">
                <th className="px-6 py-4 font-semibold">Cliente</th>
                <th className="px-6 py-4 font-semibold">Plano</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Mensagens</th>
                <th className="px-6 py-4 font-semibold">Criado em</th>
                <th className="px-6 py-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {clients.map((client, index) => (
                <tr key={index} className="hover:bg-slate-600/30 transition-colors group">
                  {/* Coluna Cliente */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${client.color} flex items-center justify-center text-blue-100 font-bold shadow-inner`}>
                        {client.initial}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-600">{client.name}</div>
                        <div className="text-xs text-slate-500">{client.email}</div>
                      </div>
                    </div>
                  </td>

                  {/* Coluna Plano */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-md text-xs font-medium 
                      ${client.plan === 'Premium' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 
                        client.plan === 'Pro' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                        'bg-slate-700/30 text-slate-400 border border-slate-600'}`}>
                      {client.plan}
                    </span>
                  </td>

                  {/* Coluna Status */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${client.status === 'Ativo' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-slate-500'}`} />
                      <span className={client.status === 'Ativo' ? 'text-emerald-500' : 'text-slate-500'}>
                        {client.status}
                      </span>
                    </div>
                  </td>

                  {/* Coluna Mensagens */}
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">
                    {client.messages}
                  </td>

                  {/* Coluna Data */}
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {client.date}
                  </td>

                  {/* Coluna Ações */}
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 hover:bg-slate-700 rounded-md transition-colors text-slate-500 hover:text-white">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}