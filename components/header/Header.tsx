import Image from "next/image";

import logoSrc from "./logo.png";
import avatarSrc from "./avatar.png";
import { ArrowBottomIcon } from "./icons/arrow-bottom-icon";

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
        <ArrowBottomIcon />
      </button>
    </header>
  );
}
