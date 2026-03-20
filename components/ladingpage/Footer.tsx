import logo from '@/assets/Fasty/Prancheta 3.png'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Descrição (Ocupa 2 colunas no desktop para dar respiro) */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              {/* Substitua pelo seu componente de Logo real */}
                <Image src={logo}
                    alt='logo da fasty'
                    width={28}
                    height={28}
                />
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">Fasty</span>
            </div>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              A plataforma definitiva para automação de WhatsApp. 
              Transforme seu atendimento em uma máquina de vendas com inteligência e métricas reais.
            </p>
          </div>

          {/* Coluna 2: Produto */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900">Produto</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#features" className="hover:text-[#22C55E] transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-[#22C55E] transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-[#22C55E] transition-colors">API</a></li>
              <li><a href="#" className="hover:text-[#22C55E] transition-colors">Integrações</a></li>
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900">Suporte</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-[#22C55E] transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-[#22C55E] transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-[#22C55E] transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-[#22C55E] transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior: Copyright e Termos */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Fasty Automation. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-8 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-600">Privacidade</a>
            <a href="#" className="hover:text-slate-600">Termos</a>
          </div>
        </div>

      </div>
    </footer>
  );
}