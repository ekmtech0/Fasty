import { Paperclip, Smile, Send, Bot, Search, MoreVertical } from 'lucide-react';

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col bg-[#efeae2] relative">
      {/* Background Pattern Overlay (Opcional) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://web.whatsapp.com/img/bg-chat-tile-light_04fcacde533c5012382cfed15115d0ac.png')]"></div>

      {/* Header Chat */}
      <div className="p-3 bg-white border-b border-slate-200 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">J</div>
          <div>
            <h3 className="font-semibold text-sm">João Silva</h3>
            <p className="text-[10px] text-slate-400">visto por último hoje às 23:05</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
            <Bot className="w-3 h-3" /> BOT ATIVO
          </span>
          <Search className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Mensagens */}
      <div className="flex-1 p-6 overflow-y-auto z-10 space-y-4">
        {/* Balão IA */}
        <div className="max-w-[70%] bg-white rounded-lg p-3 shadow-sm relative">
           <span className="text-[10px] text-teal-600 font-bold flex items-center gap-1 mb-1 border-b border-teal-50 pb-1">
             <Bot className="w-3 h-3" /> IA ASSISTENTE
           </span>
           <p className="text-sm text-slate-800">Olá João! Com certeza. O plano premium oferece acesso ilimitado à nossa IA.</p>
           <span className="text-[9px] text-slate-400 float-right mt-1">10:50</span>
        </div>

        {/* Balão Cliente */}
        <div className="max-w-[70%] bg-[#d9fdd3] ml-auto rounded-lg p-3 shadow-sm relative">
           <p className="text-sm text-slate-800">Oi, obrigado!</p>
           <span className="text-[9px] text-slate-400 float-right mt-1">11:49</span>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 bg-white flex items-center gap-3 z-10">
        <Smile className="text-slate-500 cursor-pointer" />
        <Paperclip className="text-slate-500 cursor-pointer" />
        <input type="text" placeholder="Digite uma mensagem" className="flex-1 bg-slate-100 border-none rounded-lg py-2 px-4 text-sm focus:ring-0" />
        <Send className="text-teal-600 cursor-pointer fill-current" />
      </div>
    </div>
  );
}