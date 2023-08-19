import { GameSymbol } from "./Game-symbol";

export default function GameMoveInfo({
  currentUser,
  nextUser,
}: {
  currentUser: string;
  nextUser: string;
}) {
  return (
    <>
      <div className="flex items-center gap-2 font-semibold text-xl">
        Current User:
        <GameSymbol symbol={currentUser} className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2 text-md font-light text-stone-600">
        Next user:
        <GameSymbol symbol={nextUser} className="w-3 h-3" />
      </div>
    </>
  );
}
