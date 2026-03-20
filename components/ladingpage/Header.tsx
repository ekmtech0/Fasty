import logo from '@/assets/Fasty/Prancheta 3.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
    return (
        <header className="p-4 border-b border-slate-200 fixed bg-white w-full z-50">
            <nav className="flex justify-around gap-16 items-center">
                <div className="flex gap-2">
                    <Image src={logo} width={22} height={22} alt='Logo da fasty'/>
                    <span className='font-extrabold'>Fasty</span>
                
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li><Link href="#funcionalidades" className="hover:text-primary text-xs">Funcionalidades</Link></li>
                        <li><a href="#" className="hover:text-primary text-xs">Métricas</a></li>
                        <li><a href="#" className="hover:text-primary text-xs">Preços</a></li>
                        <li><a href="#" className="text-xs bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-xl">Começar Agora</a></li>
                    </ul>
                </div>
            
            </nav>

        </header>
    )
}