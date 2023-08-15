import Image, { StaticImageData } from "next/image";

import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({
  className,
  name,
  rating,
  avatar = avatarSrc,
}: {
  className?: string;
  name: string;
  rating: string;
  avatar: StaticImageData | string;
}) {
  return (
    <article className={clsx(className, "flex items-center gap-4")}>
      <Image src={avatar} width={48} height={48} alt="Avatar" />
      <div className="overflow-hidden">
        <div className="font-semibold text-xl leading-tight truncate" title={name}>
          {name}
        </div>
        <div className="text-stone-600">Rating: {rating}</div>
      </div>
    </article>
  );
}
