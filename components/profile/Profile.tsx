import Image from "next/image";

import avatarSrc from "./avatar.png";

export function Profile() {
  return (
    <article className="flex items-center gap-4">
      <Image src={avatarSrc} width={48} height={48} alt="Avatar" />
      <div>
        <div className="font-semibold text-xl leading-tight">UserName</div>
        <div className="text-stone-600">Rating: 1422</div>
      </div>
    </article>
  );
}
