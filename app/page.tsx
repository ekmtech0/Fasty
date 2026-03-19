import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
        <Link
          href={'/login'}
          title="fazer Login do cliente"
          className="bg-primary text-white p-4 rounded-lg"
        > Login</Link>  
    </main>
  );
}
