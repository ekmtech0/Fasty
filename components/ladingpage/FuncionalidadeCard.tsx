import { LucideIcon } from "lucide-react"

type Props = {
    icon : LucideIcon;
    title: string
    lable: string
}

export default function FuncionalidadeCard( { icon : Icon, title, lable } : Props ){
    return(
        <div className="shadow-md border-2 border-slate-100 sm:w-full px-6 py-4 space-y-4 lg:w-60 rounded-lg">
            <div>
                <Icon
                    width={28}
                    height={28}
                    color="#22C55E"
                    className="bg-primary/20 p-1 rounded-lg "
                />
            </div>
            <div className="space-y-2">
                <h3 className="font-bold">{ title }</h3>
                <p className="text-slate-600 text-sm">{ lable }</p>
            </div>
        </div>
    )
}