import { BrickWall } from "lucide-react"
import BrowserMockup from "./BrowserMockup"
import { CheckCircle } from "lucide-react"
export default function ShowPainel() {
    return (
        <section className="min-h-screen p-4 flex justify-center">
            <article className="flex items-center w-90% bg-white shadow-md border-2 border-slate-50 py-4 px-8 rounded-2xl">
                <div className="space-y-3">
                    <h2 className="font-extrabold text-4xl">Um painel de gestão <br /> <b className="text-primary">completo</b> e <br />personalizado</h2>
                    <p className="text-slate-600">Visualize o desempenho do seu bot em tempo real. Adapte as <br /> respostas e o fluxo de atendimento para que o bot fale a língua <br /> do seu negócio.</p>
                    <ul className="space-y-4 text-slate-600">
                        <li className="flex items-center gap-2">
                            <CheckCircle
                                color="#22C55E"
                                width={18}
                                height={18}
                            /> <span className="text-sm">Personalização por nicho de mercado</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle
                                color="#22C55E"
                                width={18}
                                height={18}
                            /> <span className="text-sm">Monitoramento de mensagens em tempo real</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle
                                color="#22C55E"
                                width={18}
                                height={18}
                            /> <span className="text-sm">Gráficos de engajamento e conversão</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle
                                color="#22C55E"
                                width={18}
                                height={18}
                            /> <span className="text-sm">Gestão de fluxos de conversa customizados</span>
                        </li>
                    </ul>
                </div>
                <BrowserMockup />
            </article>
        </section>
    )
}