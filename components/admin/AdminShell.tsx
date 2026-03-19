"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import AdminSidebar from "@/components/admin/AdminSidebar"

export default function AdminShell({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setSidebarOpen(false)
    }, [pathname])

    useEffect(() => {
        if (!sidebarOpen) return
        const previous = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = previous
        }
    }, [sidebarOpen])

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <header className="lg:hidden sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
                <div className="h-14 px-4 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-slate-100 transition"
                        aria-label="Abrir menu"
                    >
                        <Menu className="h-5 w-5 text-primary" />
                    </button>
                    <div className="font-semibold text-primary">Admin</div>
                </div>
            </header>

            <div className="flex">
                <div className="hidden lg:block w-[280px] shrink-0">
                    <AdminSidebar variant="desktop" />
                </div>

                <AdminSidebar
                    variant="mobile"
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <main className="flex-1 min-w-0 p-4 lg:p-6">{children}</main>
            </div>
        </div>
    )
}
