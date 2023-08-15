import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextUser(currentUser: string, usersCount: number) {
  const moveOrdersInGame = MOVE_ORDER.slice(0, usersCount);

  const nextUserIndex = moveOrdersInGame.indexOf(currentUser) + 1;
  return moveOrdersInGame[nextUserIndex] ?? moveOrdersInGame[0];
}

export function useGameState(usersCount: number) {
  const [{ cells, currentUser }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentUser: GAME_SYMBOLS.CROSS,
  }));

  const nextUser = getNextUser(currentUser, usersCount);

  const handleCellClick = (index: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentUser: getNextUser(lastGameState.currentUser, usersCount),
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
