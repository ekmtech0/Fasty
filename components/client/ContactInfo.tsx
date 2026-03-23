import { X, User, Phone, ChevronDown, UserCheck } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="w-[300px] border-l border-slate-200 bg-white flex flex-col p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <X className="w-5 h-5 text-slate-400 cursor-pointer" />
        <h2 className="text-sm font-bold text-slate-700">Dados do Contato</h2>
      </div>

      {/* Avatar Big */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-400 mb-4">J</div>
        <h3 className="font-bold text-lg text-slate-900">João Silva</h3>
        <p className="text-sm text-slate-500">+55 11 99999-8888</p>
      </div>

      {/* CRM Sections */}
      <div className="space-y-6">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Status do Lead</label>
          <div className="space-y-2">
            <button className="w-full p-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100 flex justify-between">NOVO <UserCheck className="w-3 h-3" /></button>
            <button className="w-full p-2 bg-white text-slate-500 text-xs font-bold rounded-lg border border-slate-200 text-left">NEGOCIAÇÃO</button>
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Classificação</label>
          <div className="flex flex-wrap gap-2">
            {['Frio', 'Quente', 'VIP'].map(t => (
              <span key={t} className={`px-3 py-1 rounded-full text-[10px] font-bold border ${t === 'Quente' ? 'bg-red-50 text-red-500 border-red-100' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>{t}</span>
            ))}
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Agente Responsável</label>
          <div className="relative">
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs text-slate-700 appearance-none">
              <option>Victor Makuka</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}