import { TimerIcon } from "./icons/timer-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";

export function GameInfo({
  isRatingGame,
  usersCount,
  timerMode,
}: {
  isRatingGame: boolean;
  usersCount: number;
  timerMode: string;
}) {
  return (
    <article className="flex items-center gap-4 text-xl font-light text-stone-600">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-2">
        <UserIcon />
        {usersCount}
      </div>
      <div className="flex items-center gap-2">
        <TimerIcon /> {timerMode}
      </div>
    </article>
  );
}
