import Link from "next/link";

import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { TimerIcon } from "./icons/timer-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";

export function GameTitle({usersCount}:{usersCount: number}) {
  return (
    <section className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 hover:text-indigo-400 text-lg pb-3"
      >
        <ArrowLeftIcon />
        To Home
      </Link>
      <h1 className="text-5xl font-semibold leading-tight inline-block bg-gradient-to-r from-amber-400 via-indigo-600 to-red-500 bg-clip-text text-transparent">
        Tic Tac Toe Online
      </h1>
      <article className="flex items-center gap-4 text-xl font-light text-stone-600">
        <StarIcon />
        <div className="flex items-center gap-2">
          <UserIcon />{usersCount}
        </div>
        <div className="flex items-center gap-2">
          <TimerIcon /> 1 minute per turn
        </div>
      </article>
    </section>
  );
}
