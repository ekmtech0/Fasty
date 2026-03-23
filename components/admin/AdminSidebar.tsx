"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentType } from "react"
import {
    Activity,
    BrainCircuit,
    LayoutDashboard,
    LogOut,
    MessagesSquare,
    Settings,
    Users,
    Wallet,
} from "lucide-react"

type NavItem = {
    href: string
    label: string
    Icon: ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
    { href: "/admin/home", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/admin/clients", label: "Clientes", Icon: Users },
    { href: "/admin/logs", label: "Logs & Monitoramento", Icon: Activity },
    { href: "/admin/ia", label: "Gest\u00E3o de IA", Icon: BrainCircuit },
    { href: "/admin/planos", label: "Planos & Fatura\u00E7\u00E3o", Icon: Wallet },
    { href: "/admin/configuracoes", label: "Configura\u00E7\u00F5es", Icon: Settings },
]

function isActive(pathname: string, href: string) {
    if (href === "/admin/home") return pathname === "/admin" || pathname === href
    return pathname === href || pathname.startsWith(`${href}/`)
}

type AdminSidebarProps = {
    variant?: "desktop" | "mobile"
    open?: boolean
    onClose?: () => void
}

export default function AdminSidebar({
    variant = "desktop",
    open = false,
    onClose,
}: AdminSidebarProps) {
    const pathname = usePathname() ?? ""
    const isMobile = variant === "mobile"

    if (isMobile) {
        return (
            <>
                <div
                    className={[
                        "lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity",
                        open ? "opacity-100" : "opacity-0 pointer-events-none",
                    ].join(" ")}
                    onClick={onClose}
                    aria-hidden="true"
                />
                <aside
                    className={[
                        "lg:hidden fixed left-0 top-0 z-50 h-dvh w-[280px] border-r border-slate-200 bg-white/95 backdrop-blur flex flex-col",
                        "transition-transform duration-200",
                        open ? "translate-x-0" : "-translate-x-full",
                    ].join(" ")}
                    aria-hidden={!open}
                >
                    <div className="p-6 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-primary shadow-lg shadow-primary/20 grid place-items-center">
                            <MessagesSquare className="h-5 w-5 text-white" />
                        </div>
                        <div className="leading-tight">
                            <div className="text-slate-900 font-semibold text-lg">SaaS Admin</div>
                            <div className="text-xs text-slate-500">Painel de controlo</div>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="ml-auto inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-slate-100 transition"
                            aria-label="Fechar menu"
                        >
                            <span className="text-xl leading-none">{"\u00D7"}</span>
                        </button>
                    </div>

                    <nav className="px-4 pb-4 flex-1 overflow-auto">
                        <div className="space-y-2">
                            {navItems.map(({ href, label, Icon }) => {
                                const active = isActive(pathname, href)
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={onClose}
                                        className={[
                                            "group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition",
                                            active
                                                ? "bg-primary/10 text-slate-900 ring-1 ring-primary/20"
                                                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
                                        ].join(" ")}
                                        aria-current={active ? "page" : undefined}
                                    >
                                        <span
                                            className={[
                                                "absolute left-2 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full transition-opacity",
                                                active
                                                    ? "bg-primary opacity-100"
                                                    : "opacity-0 group-hover:opacity-100 bg-slate-300",
                                            ].join(" ")}
                                        />
                                        <Icon
                                            className={[
                                                "h-5 w-5 transition-colors",
                                                active
                                                    ? "text-primary"
                                                    : "text-slate-500 group-hover:text-slate-700",
                                            ].join(" ")}
                                        />
                                        <span className="truncate">{label}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>

                    <div className="p-4 border-t border-slate-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
                        >
                            <LogOut className="h-5 w-5 text-slate-500" />
                            <span>Sair</span>
                        </button>
                    </div>
                </aside>
            </>
        )
    }

    return (
        <aside className="fixed left-0 top-0 z-30 h-dvh w-[280px] shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur flex flex-col">
            <div className="p-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary shadow-lg shadow-primary/20 grid place-items-center">
                    <MessagesSquare className="h-5 w-5 text-white" />
                </div>
                <div className="leading-tight">
                    <div className="text-slate-900 font-semibold text-lg">SaaS Admin</div>
                    <div className="text-xs text-slate-500">Painel de controlo</div>
                </div>
            </div>

            <nav className="px-4 pb-4 flex-1 overflow-auto">
                <div className="space-y-2">
                    {navItems.map(({ href, label, Icon }) => {
                        const active = isActive(pathname, href)
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={[
                                    "group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition",
                                    active
                                        ? "bg-primary/10 text-slate-900 ring-1 ring-primary/20"
                                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
                                ].join(" ")}
                                aria-current={active ? "page" : undefined}
                            >
                                <span
                                    className={[
                                        "absolute left-2 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full transition-opacity",
                                        active ? "bg-primary opacity-100" : "opacity-0 group-hover:opacity-100 bg-slate-300",
                                    ].join(" ")}
                                />
                                <Icon
                                    className={[
                                        "h-5 w-5 transition-colors",
                                        active ? "text-primary" : "text-slate-500 group-hover:text-slate-700",
                                    ].join(" ")}
                                />
                                <span className="truncate">{label}</span>
                            </Link>
                        )
                    })}
                </div>
            </nav>

            <div className="p-4 border-t border-slate-200">
                <button
                    type="button"
                    className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
                >
                    <LogOut className="h-5 w-5 text-slate-500" />
                    <span>Sair</span>
                </button>
            </div>
        </aside>
    )
}
