import React from 'react';
import { 
  Zap, 
  MessageSquare, 
  Users, 
  LayoutDashboard, 
  Settings, 
  Bell 
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  // --- CONFIGURAÇÃO DE CORES ---
  const primaryBg = "bg-[#14b8a6]"; // O tom de verde/teal da imagem (ajuste para sua primary)
  const primaryHover = "hover:bg-[#0d9488]";
  // -----------------------------

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-6 gap-8 z-50">
      
      {/* Logo / Top Icon */}
      <div className={`w-12 h-12 ${primaryBg} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/20 cursor-pointer transition-transform hover:scale-105`}>
        <Zap className="w-6 h-6 fill-current" />
      </div>

      {/* Navegação Principal */}
      <nav className="flex flex-col gap-4 flex-1">
        
        {/* Item Ativo (Exemplo) */}
        <Link href="#" className={`w-12 h-12 ${primaryBg} rounded-2xl flex items-center justify-center text-white shadow-md transition-all`}>
          <MessageSquare className="w-5 h-5" />
        </Link>

        {/* Itens Normais */}
        <NavItem icon={<Users className="w-5 h-5" />} href="/clientes" />
        <NavItem icon={<LayoutDashboard className="w-5 h-5" />} href="/dashboard" />
        <NavItem icon={<Zap className="w-5 h-5" />} href="/automacoes" />
        <NavItem icon={<Settings className="w-5 h-5" />} href="/configuracoes" />
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="flex flex-col gap-6 items-center">
        {/* Notificação com Ponto Vermelho */}
        <div className="relative cursor-pointer text-slate-500 hover:text-slate-800 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-slate-50 rounded-full"></span>
        </div>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500 font-bold text-sm shadow-sm cursor-pointer hover:border-teal-500 transition-all">
          V
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link 
      href={href} 
      className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-2xl transition-all"
    >
      {icon}
    </Link>
  );
}