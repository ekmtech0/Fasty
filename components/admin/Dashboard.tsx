import DashCard from "./DashCard"
import { User } from "lucide-react"
import { MessageCircle } from "lucide-react"
import { DollarSign } from "lucide-react"
import { TrendingUp } from "lucide-react"
import DashboardCharts from "./DashboardCharts"
export default function Dashobard() {
    return (
        <main>
        <div className="w-full grid grid-cols-2 gap-2 lg:flex  lg:justify-around lg:gap-6 ">
            <DashCard
                icone={User}
                metrica={56}
                title="Total de Clintes "
                lable={4}
            />
            <DashCard
                icone={MessageCircle}
                metrica={67}
                title="Mensagens"
                lable={19100}
            />
            <DashCard
                icone={TrendingUp}
                metrica={92}
                title="Total de Clintes "
                lable={4}
            />
            <DashCard
                icone={DollarSign}
                metrica={77}
                title="Receita Mensal "
                lable={'15.000 kz'}
            />
        </div>
        <DashboardCharts/>
        </main>
    )
}