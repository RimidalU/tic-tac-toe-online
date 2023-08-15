import { HTMLAttributes } from "react";
import Image from "next/image";

import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className }: HTMLAttributes<string>) {
  return (
    <article className={clsx(className, "flex items-center gap-4")}>
      <Image src={avatarSrc} width={48} height={48} alt="Avatar" />
      <div className="overflow-hidden">
        <div className="font-semibold text-xl leading-tight truncate">
          UserName
        </div>
        <div className="text-stone-600">Rating: 1422</div>
      </div>
    </article>
  );
}
