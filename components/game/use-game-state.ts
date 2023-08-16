import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { checkWinner, getNextUser } from "./model";

const boardSize = 19;
const sequenceSize = 5;

export function useGameState(usersCount: number) {
  const [{ cells, currentUser }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentUser: GAME_SYMBOLS.CROSS,
  }));

  const nextUser = getNextUser(currentUser, usersCount);

  const winnerSequence = checkWinner(cells, boardSize, sequenceSize);

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
    winnerSequence,
    handleCellClick,
  };
}
