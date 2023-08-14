import { HTMLAttributes } from "react";
import clsx from "clsx";

import { Profile } from "../profile";

import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { SquareIcon } from "./icons/square-icon";
import { TriangleIcon } from "./icons/triangle-icon";

export function GameInfo({ className }: HTMLAttributes<string>) {
  return (
    <section
      className={clsx(
        className,
        "bg-orange-50 shadow-lg px-8 py-4 flex flex-wrap gap-10 justify-between",
      )}
    >
      <article className="flex items-center gap-1">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-8 h-8 rounded-full bg-orange-50 absolute -top-3 -left-3 shadow flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
        <div className="w-px h-8 bg-slate-600 mx-4" />
        <span className=" font-normal text-3xl text-stone-600">01:00</span>
      </article>

      <article className="flex flex-row-reverse items-center gap-1 text-amber-400">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-8 h-8 rounded-full bg-orange-50 absolute -top-3 -left-3 shadow flex items-center justify-center">
            <ZeroIcon />
          </div>
        </div>
        <div className="w-px h-8 bg-slate-600 mx-4" />
        <span className=" font-normal text-3xl text-stone-600">01:00</span>
      </article>

      <article className="flex items-center gap-1 text-lime-400">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-8 h-8 rounded-full bg-orange-50 absolute -top-3 -left-3 shadow flex items-center justify-center">
            <SquareIcon />
          </div>
        </div>
        <div className="w-px h-8 bg-slate-600 mx-4" />
        <span className=" font-normal text-3xl text-stone-600">01:00</span>
      </article>

      <article className="flex flex-row-reverse items-center gap-1 text-pink-600">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-8 h-8 rounded-full bg-orange-50 absolute -top-3 -left-3 shadow flex items-center justify-center">
            <TriangleIcon />
          </div>
        </div>
        <div className="w-px h-8 bg-slate-600 mx-4" />
        <span className=" font-normal text-3xl text-stone-600">01:00</span>
      </article>
    </section>
  );
}
