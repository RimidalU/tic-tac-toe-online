import Image from "next/image";

import logoSrc from "./logo.png";
import avatarSrc from "./avatar.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-10 bg-orange-50 shadow-lg">
      <Image src={logoSrc} alt="Logo" className="h-20 w-24" />
      <div className="w-px h-12 bg-slate-600 mx-6" />
      <button className="w-44 bg-amber-400 hover:bg-amber-300 transition-colors font-bold text-indigo-600 text-2xl rounded-lg px-5 py-2">
        Play
      </button>
      <button className="ml-auto flex items-center gap-4 text-start text-indigo-600 hover:text-indigo-500">
        <Image src={avatarSrc} width={48} height={48} alt="Avatar" />
        <div>
          <div className="font-semibold text-xl leading-tight">UserName</div>
          <div className="text-stone-600">Rating: 1422</div>
        </div>
        <svg
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.18753 6.75003C6.04368 6.75003 5.89968 6.69505 5.78985 6.58522L0.164848 0.960222C-0.0549492 0.740426 -0.0549492 0.384504 0.164848 0.164848C0.384645 -0.0548086 0.740566 -0.0549492 0.960222 0.164848L6.18753 5.39216L11.4148 0.164848C11.6346 -0.0549492 11.9906 -0.0549492 12.2102 0.164848C12.4299 0.384645 12.43 0.740566 12.2102 0.960222L6.58522 6.58522C6.47539 6.69505 6.33139 6.75003 6.18753 6.75003Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </header>
  );
}
