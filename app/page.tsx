import Image from "next/image";
import Navbar from "./components/Navbar";
import { auth } from "@/auth";

export  default async  function Home() {
  const session = await auth();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white">
      <Navbar/>
      <h1 className="text-4xl ">Conectando con Github Acction</h1>
      <div>
        {
         session && session?.user ? <img src={session?.user?.image} width={400} alt="" /> : "CArgando"
        }
      </div>
    </div>
  );
}
