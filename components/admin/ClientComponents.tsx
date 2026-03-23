
export default function ClientComponents(){
    return(
       <section>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-slate-950">Gestão de clientes</h2>
                    <p className="text-sm text-slate-600">Gerencie seus clientes e seus planos de IA.</p>
                </div>
                <div>
                    <button className="bg-primary px-4 py-2 rounded-2xl text-white font-bold">+ Novo Cliente</button>
                </div>
            </div>
       </section>
    )
}