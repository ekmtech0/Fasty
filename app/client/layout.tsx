import Sidebar from "@/components/client/ClientSidebar";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            {/* Sidebar fixa à esquerda */}
            <Sidebar />

            {/* Conteúdo principal com margem à esquerda (w-20 da sidebar) */}
            <main className="flex-1 ml-20 min-h-screen">
                {children}
            </main>
        </div>
    );
}