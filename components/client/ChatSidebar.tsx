import { Search, Filter, MoreVertical, MessageSquarePlus, CircleDashed } from 'lucide-react';

export default function ChatSidebar() {
  const contacts = [
    { id: 1, name: 'João Silva', lastMsg: 'Olá! Recebi sua mensagem...', time: '11:49', initial: 'J' },
    { id: 2, name: 'Maria Oliveira', lastMsg: 'Qual o valor da consultoria?', time: '09:48', initial: 'M' },
  ];

  return (
    <div className="w-[350px] border-r border-slate-200 bg-white flex flex-col">
      {/* Header Sidebar */}
      <div className="p-4 flex justify-between items-center bg-slate-50/50">
        <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">V</div>
        <div className="flex gap-4 text-slate-500">
          <CircleDashed className="w-5 h-5 cursor-pointer" />
          <MessageSquarePlus className="w-5 h-5 cursor-pointer" />
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Busca e Filtros */}
      <div className="p-3 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input type="text" placeholder="Pesquisar..." className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-teal-500" />
        </div>
        <div className="flex gap-2">
          {['Todos', 'Não lidas', 'Leads'].map((f, i) => (
            <button key={f} className={`px-3 py-1 rounded-full text-xs font-medium ${i === 0 ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{f}</button>
          ))}
        </div>
      </div>

      {/* Lista */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((c) => (
          <div key={c.id} className="p-4 flex gap-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-500">{c.initial}</div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-slate-900 truncate">{c.name}</h3>
                <span className="text-[10px] text-slate-400">{c.time}</span>
              </div>
              <p className="text-sm text-slate-500 truncate">{c.lastMsg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}