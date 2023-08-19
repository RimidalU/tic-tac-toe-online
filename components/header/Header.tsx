import Image from "next/image";

import { Profile } from "../profile";
import { UiButton } from "../uikit";

import { ArrowBottomIcon } from "./icons/arrow-bottom-icon";
import userAvatarSrc from "./images/avatar-2.png";
import logoSrc from "./logo.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-10 bg-orange-50 shadow-lg">
      <Image src={logoSrc} alt="Logo" className="h-20 w-24" />
      <div className="w-px h-12 bg-slate-600 mx-6" />
      <UiButton className="w-44" size="lg" variant="primary">
        Play
      </UiButton>
      <button className="ml-auto flex items-center gap-4 text-start hover:text-indigo-400">
        <Profile avatar={userAvatarSrc} name="Harley Quinn" rating={5789} />
        <ArrowBottomIcon />
      </button>
    </header>
  );
}
