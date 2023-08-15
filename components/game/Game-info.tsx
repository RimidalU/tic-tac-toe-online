import clsx from "clsx";

import { Profile } from "../profile";

import Avatar1Icon from "./images/avatar-1.png";
import Avatar2Icon from "./images/avatar-2.png";
import Avatar3Icon from "./images/avatar-3.png";
import Avatar4Icon from "./images/avatar-4.png";

const players = [
  {
    id: 1,
    name: "Red Bull",
    rating: 1243,
    avatar: Avatar1Icon,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Harley Quinn",
    rating: 2345,
    avatar: Avatar2Icon,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Dog",
    rating: 1743,
    avatar: Avatar3Icon,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Yoda",
    rating: 273,
    avatar: Avatar4Icon,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

import { GameSymbol } from "./Game-symbol";
import { GAME_SYMBOLS } from "./constants";

export function GameInfo({ className }: { className: string }) {
  return (
    <section
      className={clsx(
        className,
        "bg-orange-50 shadow-lg px-8 py-4 grid grid-cols-2 gap-3 justify-between",
      )}
    >
      {players.map((player, index) => (
        <UserInfo key={player.id} userInfo={player} isRight={index % 2 === 1} />
      ))}
    </section>
  );
}

function UserInfo({ userInfo, isRight }) {
  return (
    <article
      className={clsx("flex items-center gap-1", isRight && "flex-row-reverse")}
    >
      <div className="relative order-">
        <Profile
          name={userInfo.name}
          rating={userInfo.rating}
          avatar={userInfo.avatar}
          className="w-48"
        />
        <div className="w-8 h-8 rounded-full bg-orange-50 absolute -top-3 -left-3 shadow flex items-center justify-center">
          <GameSymbol symbol={userInfo.symbol} />
        </div>
      </div>
      <div className="w-px h-8 bg-slate-600 mx-4 order-" />
      <span className="font-normal text-3xl text-stone-600 order-">01:00</span>
    </article>
  );
}
