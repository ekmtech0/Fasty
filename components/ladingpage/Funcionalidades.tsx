import FuncionalidadeCard from "./FuncionalidadeCard"
import { Phone } from "lucide-react"

export default function Funcionalidades() {
    return (
        <section id="funcionalidades"
            className="bg-slate-50 py-4 min-h-screen"
        >

            <div className="">
                <h3 className="text-center text-primary font-bold text-sm">FUNCIONALIDADES</h3>
                <h2 className="font-extrabold text-3xl text-center py-2">Tudo que você precisa para dominar <br /> o whatsapp</h2>
                <h4 className="text-center text-slate-400 text-sm">Desenvolvemos ferramentas poderosas para simplificar sua comunicação e transformar <br /> conversas em faturamento real.</h4>
            </div>
            <article className="flex justify-center">
                <div className="p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <FuncionalidadeCard
                        icon={Phone}
                        title="Multi-dispositivos"
                        lable="Conecte múltiplos números e gerencie tudo a partir de uma única central de comando centralizada"
                    />
                    <FuncionalidadeCard
                        icon={Phone}
                        title="Multi-dispositivos"
                        lable="Conecte múltiplos números e gerencie tudo a partir de uma única central de comando centralizada"
                    />
                    <FuncionalidadeCard
                        icon={Phone}
                        title="Multi-dispositivos"
                        lable="Conecte múltiplos números e gerencie tudo a partir de uma única central de comando centralizada"
                    />
                    <FuncionalidadeCard
                        icon={Phone}
                        title="Multi-dispositivos"
                        lable="Conecte múltiplos números e gerencie tudo a partir de uma única central de comando centralizada"
                    />
                    <FuncionalidadeCard
                        icon={Phone}
                        title="Multi-dispositivos"
                        lable="Conecte múltiplos números e gerencie tudo a partir de uma única central de comando centralizada"
                    />
                    <FuncionalidadeCard
                        icon={Phone}
                        title="Multi-dispositivos"
                        lable="Conecte múltiplos números e gerencie tudo a partir de uma única central de comando centralizada"
                    />
                </div>
            </article>

        </section>
    )
}