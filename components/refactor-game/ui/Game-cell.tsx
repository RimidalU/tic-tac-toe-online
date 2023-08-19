import clsx from "clsx";

import { GameSymbol } from "./Game-symbol";

export function GameCell({
  isWinner,
  disabled,
  cellSymbol,
  onClick,
}: {
  isWinner: boolean;
  disabled: boolean;
  cellSymbol: string;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-stone-600 hover:bg-red-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-500/50",
      )}
    >
      {cellSymbol && <GameSymbol symbol={cellSymbol} />}
    </button>
  );
}
