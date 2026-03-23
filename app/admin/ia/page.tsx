'use client'

import React, { useState } from 'react';
import { Save, Bot, Settings2, Sparkles, ChevronDown } from 'lucide-react';

export default function IAGestion() {
  const [temperature, setTemperature] = useState(0.7);

  // --- CONFIGURAÇÃO DE CORES ---
  // Substitua 'blue' pelo nome da sua cor primária no tailwind.config.js
  const primaryText = "text-primary";
  const primaryBg = "bg-primary";
  const primaryHoverBg = "hover:bg-primary/90";
  // -----------------------------

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      
      {/* Cabeçalho */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Gestão de IA</h1>
          <p className="text-slate-500">Configure o comportamento global da inteligência artificial.</p>
        </div>
        <button className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl ${primaryBg} ${primaryHoverBg} text-white font-semibold transition-all shadow-lg shadow-blue-500/20`}>
          <Save className="w-4 h-4" />
          Salvar Alterações
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card Principal: Prompt Global */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-blue-50 ${primaryText}`}>
              <Bot className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Prompt Global (System Instruction)</h2>
          </div>

          <div className="relative">
            <textarea 
              className="w-full h-[400px] p-6 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
              defaultValue={`Você é um assistente virtual inteligente especializado em atendimento ao cliente via WhatsApp.
Seu objetivo é ser prestativo, educado e eficiente.

Diretrizes:
1. Responda de forma concisa.
2. Use um tom profissional mas amigável.
3. Se não souber a resposta, direcione para um atendente humano.
4. Use emojis moderadamente para tornar a conversa mais leve.`}
            />
          </div>
          <p className="mt-4 text-xs text-slate-400 italic">
            Este prompt define a personalidade e as regras básicas para todas as instâncias de IA.
          </p>
        </div>

        {/* Coluna Direita: Parâmetros e Dicas */}
        <div className="flex flex-col gap-6">
          
          {/* Card de Parâmetros */}
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-8">
              <Settings2 className={`w-5 h-5 ${primaryText}`} />
              <h2 className="text-lg font-bold text-slate-800">Parâmetros</h2>
            </div>

            {/* Slider de Temperatura */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-600">Temperatura</label>
                <span className={`text-sm font-bold ${primaryText}`}>{temperature}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className={`w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600`}
              />
              <div className="flex justify-between text-[10px] uppercase tracking-wider font-bold text-slate-400">
                <span>Preciso</span>
                <span>Criativo</span>
              </div>
            </div>

            {/* Select de Modelo */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Modelo Padrão</label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer">
                  <option>Gemini 1.5 Flash</option>
                  <option>Gemini 1.5 Pro</option>
                  <option>GPT-4o mini</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </section>

          {/* Card de Dica de Otimização */}
          <section className={`rounded-3xl border border-blue-100 bg-blue-50/50 p-6`}>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className={`w-5 h-5 ${primaryText}`} />
              <h2 className={`text-sm font-bold ${primaryText} uppercase tracking-tight`}>Dica de Otimização</h2>
            </div>
            <p className="text-sm text-blue-800/80 leading-relaxed">
              Prompts mais específicos geram leads de maior qualidade. Tente incluir exemplos de perguntas e respostas ideais.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}