import Image from "next/image";
import logoSrc from "./logo.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-10 bg-orange-50 shadow-lg">
      <Image src={logoSrc} alt="Logo" className="h-20 w-24" />
      <div className="w-px h-16 bg-slate-300 mx-6" />
      <button className="w-44 bg-amber-400 hover:bg-amber-300 transition-colors text-indigo-600 rounded-lg px-5 py-2">
        Play
      </button>
    </header>
  );
}
