'use client'

import React, { useState } from 'react';
import { login } from '@/services/login';
import { useRouter } from 'next/navigation';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import logo from '@/assets/Fasty/Prancheta 3.png'
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [see, setSee] = useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await login({ email: email, password: password });
            if (res === 1)
                router.replace('/admin/home')
            else if (res === 2)
                router.replace('/client/home')
            else
                alert("Credenciais inválidas")
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col justify-center items-center">
                    <Image src={logo}
                    width={100}
                    height={100}
                    alt="Logo da Fasty"
                    />
                    <h1 className="text-3xl font-bold text-primary tracking-tight">Bem-vindo de volta</h1>
                    <p className="text-slate-400 mt-2">Entre com suas credenciais para acessar o painel</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-surface-dark p-8 rounded-3xl shadow-2xl space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-500">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@exemplo.com"
                                className="w-full border border-slate-400 rounded-xl py-3 pl-3 text-slate-700 placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-500">Senha</label>
                        <div className="relative flex items-center rounded-xl border border-slate-400 
                focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent 
                transition-all">
                            <input
                                type={see ? 'text' : 'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full py-3 pl-3 pr-10 outline-none text-slate-700 placeholder:text-slate-600 rounded-xl"
                            />
                            {see ? (
                                <Eye
                                    className="absolute right-3" onClick={() => setSee(false)} />
                            ) :
                                (<EyeOff
                                    className="absolute right-3"
                                    onClick={() => setSee(true)} />
                                )
                            }
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>

                    <div className="text-center">
                        <a href="#" className="text-sm text-primary hover:underline">Esqueceu sua senha?</a>
                    </div>
                </form>

                <p className="text-center text-slate-500 text-sm">
                    &copy; 2026 Fasty. Todos os direitos reservados.
                </p>
            </div>
        </div >
    );
}