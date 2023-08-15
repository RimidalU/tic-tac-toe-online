import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextUser(currentUser) {
  const nextUserIndex = MOVE_ORDER.indexOf(currentUser) + 1;
  return MOVE_ORDER[nextUserIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {
  const [{ cells, currentUser }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentUser: GAME_SYMBOLS.CROSS,
  }));

  const nextUser = getNextUser(currentUser);

  const handleCellClick = (index: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentUser: getNextUser(lastGameState.currentUser),
        cells: lastGameState.cells.map((cell, i) => {
          return i === index ? lastGameState.currentUser : cell;
        }),
      };
    });
  };

  return {
    cells,
    currentUser,
    nextUser,
    handleCellClick,
  };
}
