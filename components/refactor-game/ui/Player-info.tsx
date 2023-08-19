import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import { GameSymbol } from "./Game-symbol";

export function PlayerInfo({
  avatar,
  rating = 0,
  name,
  symbol,
  seconds = 0,
  isRight,
  isTimerRunning,
}: {
  avatar: StaticImageData;
  rating: number;
  name: string;
  symbol: string;
  seconds: number;
  isRight: boolean;
  isTimerRunning: boolean;
}) {
  const minutesInTimer = String(Math.floor(seconds / 60)).padStart(2, "0");

  const secondsInTimer = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  return (
    <article
      className={clsx("flex items-center gap-1", isRight && "flex-row-reverse")}
    >
      <div className="relative w-48">
        <article className="flex items-center gap-2">
          <Image src={avatar} width={48} height={48} alt="Avatar" />
          <div className="overflow-hidden">
            <div
              className="font-semibold text-xl leading-tight truncate"
              title={name}
            >
              {name}
            </div>
            <div className="text-stone-600">Rating: {rating}</div>
          </div>
        </article>
        <div className="w-8 h-8 rounded-full bg-orange-50 absolute -top-3 -left-3 shadow flex items-center justify-center">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className="w-px h-8 bg-slate-600 mx-4" />
      <span
        className={clsx(
          "font-normal text-3xl w-[85px]",
          isDanger ? "text-red-500" : "text-stone-600",
          isTimerRunning ? "opacity-100" : "opacity-40",
        )}
      >
        {minutesInTimer}:{secondsInTimer}
      </span>
    </article>
  );
}
