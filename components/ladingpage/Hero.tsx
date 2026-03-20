import DeviceMockup from "./DeviceMockup"

export default function Hero() {
    return (
        <section id="hero"
        className="pt-20 min-h-screen w-screen"
        >

            <div className="md:flex md:justify-around md:items-center px-4 py-4"
            >
                <div className="space-y-8">
                    <h2 className="bg-primary/20 font-bold text-primary">ºAutomação Inteligente</h2>
                    <h1 className="text-6xl"><b className="font-extrabold ">Escolhe seu <br /> atendimento no</b> <br /><b className="text-primary font-extrabold">WhatsApp</b></h1>
                    <h2 className="text-slate-600 text-sm">O Fasty automatiza suas conversas, gerencia seus clientes e <br />fornece métricas em tempo real para você focar no que <br /> realmente importa: vender mais.</h2>
                    <div className="flex gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">Criar meu bot Grátis</button>
                        <button className="border border-slate-300  text-black font-bold rounded-xl px-6 py-3 hover:shadow-md transition">Ver Demonstração</button>
                    </div>
                    <h3 className="text-slate-500 text-sm">+23 empresas confiam na fasty</h3>
                </div>
                <div className="">
                    <DeviceMockup />
                </div>
            </div>
        </section>
    )
}