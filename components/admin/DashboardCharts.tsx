import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// === DADOS DE EXEMPLO (Podes substituir pelas tuas APIs) ===
const messageData = [
  { name: 'Jan', value: 4000 },
  { name: 'Fev', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Abr', value: 2800 }, // O pico "W"
  { name: 'Mai', value: 1900 },
  { name: 'Jun', value: 2500 },
  { name: 'Jul', value: 3600 },
];

const leadsData = [
  { name: 'Jan', value: 240 },
  { name: 'Fev', value: 190 },
  { name: 'Mar', value: 980 }, // O pico grande
  { name: 'Abr', value: 380 },
  { name: 'Mai', value: 480 },
  { name: 'Jun', value: 380 },
  { name: 'Jul', value: 420 },
];

// === CORES E ESTILOS ===
const COLOR_PRIMARY_BLUE = '#2563EB'; // Azul suave do gráfico de linhas
const COLOR_PRIMARY_GREEN = '#25cf5f'; // Verde vibrante das barras
const COLOR_GRID = '#25cf5f'; // Cor das linhas de grade discretas
const COLOR_AXIS_TEXT = '#a0aec0'; // Cinza claro para os textos (Meses e Valores)

// Estilo para o container dos gráficos (Dark Mode)
const cardClass = "bg-slate-50 p-6 rounded-3xl shadow-xl";

export default function DashboardCharts() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* --- GRÁFICO 1: Crescimento de Mensagens (Área/Linha) --- */}
        <div className={cardClass}>
          <h3 className="text-primary text-xl font-semibold mb-6">Crescimento de Mensagens</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={messageData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                {/* Linhas de Grade discretas */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={COLOR_GRID} />
                
                {/* Eixos */}
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: COLOR_AXIS_TEXT, fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: COLOR_AXIS_TEXT, fontSize: 12 }} interval={0} ticks={[0, 1000, 2000, 3000, 4000]} />
                
                {/* Tooltip ao passar o rato */}
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ background: '#25cf5f', border: 'none', borderRadius: '8px', color: '#fff' }} />
                
                {/* O Gráfico de Área (Curvo com preenchimento) */}
                <Area 
                  type="monotone" // Dá a curva suave ("W")
                  dataKey="value" 
                  stroke={COLOR_PRIMARY_BLUE} 
                  strokeWidth={2}
                  fill={COLOR_PRIMARY_GREEN} 
                  fillOpacity={0.15} // Transparência suave no fundo
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- GRÁFICO 2: Leads por Mês (Barras) --- */}
        <div className={cardClass}>
          <h3 className="text-primary text-xl font-semibold mb-6">Leads por Mês</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barSize={35}>
                {/* Linhas de Grade discretas */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={COLOR_GRID} />
                
                {/* Eixos */}
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: COLOR_AXIS_TEXT, fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: COLOR_AXIS_TEXT, fontSize: 12 }} interval={0} ticks={[0, 250, 500, 750, 1000]} />
                
                {/* Tooltip ao passar o rato */}
                <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} contentStyle={{ background: '#25cf5f', border: 'none', borderRadius: '8px', color: '#fff' }} />
                
                {/* O Gráfico de Barras (Verde) */}
                <Bar 
                  dataKey="value" 
                  fill={COLOR_PRIMARY_GREEN} 
                  radius={[6, 6, 0, 0]} // Cantos arredondados no topo da barra
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
