export default function DeviceMockup() {
    return (
        <div className="flex  md:justify-center items-center">
            <div className="relative w-[260px] border-2 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-gray-100 flex flex-col overflow-hidden">

                <div className="bg-[#22C55E] p-5 pt-10 rounded-b-[2rem]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl">⚡</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-xs leading-tight">Fasty Bot</h3>
                            <p className="text-white/80 text-[8px]">Online agora</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-4 space-y-4 bg-white">
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-50 max-w-[85%]">
                        <p className="text-gray-700 text-[9px]">Olá! Como posso ajudar sua empresa hoje? 🚀</p>
                    </div>

                    <div className="bg-[#E8F7EE] p-4 rounded-2xl rounded-tr-none self-end ml-auto max-w-[85%]">
                        <p className="text-gray-700 text-[9px] font-medium">Quero saber sobre os planos de automação.</p>
                    </div>

                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-50 max-w-[85%]">
                        <p className="text-gray-700 text-[9px]">Com certeza! Temos planos que se adaptam ao seu negócio. Gostaria de ver as métricas?</p>
                    </div>

                    <div className="flex gap-2 pt-2">
                        <button className="border border-green-500 text-green-600 px-4 py-2 rounded-full text-[9px] font-semibold hover:bg-green-50 transition-colors">
                            Ver Planos
                        </button>
                        <button className="border border-green-500 text-green-600 px-4 py-2 rounded-full text-[9px] font-semibold hover:bg-green-50 transition-colors">
                            Falar com Consultor
                        </button>
                    </div>
                </div>

                <div className="h-1.5 w-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
            </div>
        </div>
    )
}