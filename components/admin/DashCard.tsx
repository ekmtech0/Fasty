import { LucideIcon } from "lucide-react";

type Props = {
    title : string;
    icone: LucideIcon;
    lable: string | number;
    metrica: number
}

export default function DashCard({ title, icone: Icon, lable, metrica }: Props) {
  return (
    <div className="md:w-full bg-white p-5 rounded-3xl flex flex-col  shadow-lg">
      {/* Header: Ícone e Métrica */}
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-2xl">
          <Icon className="text-blue-500 size-6" />
        </div>
        
        <div className="flex items-center gap-1 px-3 py-1 rounded-full">
          <span className="text-green-500 text-sm font-medium">↗ {metrica}</span>
        </div>
      </div>

      {/* Body: Título e Valor */}
      <div className="flex flex-col gap-2">
        <h3 className="text-slate-400 text-md font-medium">{title}</h3>
        <p className="text-3xl font-bold tracking-tight">{lable}</p>
      </div>
    </div>
  );
}