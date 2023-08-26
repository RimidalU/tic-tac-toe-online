import { memo } from "react";
import clsx from "clsx";

import { GameSymbol } from "./Game-symbol";

export const GameCell = memo(function GameCell({
  isWinner,
  index,
  disabled,
  cellSymbol,
  onClick,
}: {
  isWinner: boolean;
  index: number;
  disabled: boolean;
  cellSymbol: string;
  onClick: (index: number) => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-stone-600 hover:bg-red-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-500/50",
      )}
    >
      {cellSymbol && <GameSymbol symbol={cellSymbol} />}
    </button>
  );
});
