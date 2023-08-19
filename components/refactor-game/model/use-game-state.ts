import { useState } from "react";

import { getNextUser } from "./get-next-user";
import { checkWinner } from "./check-winner";

import { GAME_SYMBOLS } from "../constants";
import { IState } from "../types";

const boardSize = 19;
const sequenceSize = 5;

export function useGameState(usersCount: number) {
  const [{ cells, currentUser, usersTimeOver }, setGameState] =
    useState<IState>(() => ({
      cells: new Array(19 * 19).fill(null),
      usersTimeOver: [],
      currentUser: GAME_SYMBOLS.CROSS,
    }));

  const nextUser = getNextUser(currentUser, usersCount, usersTimeOver);

  const winnerSequence = checkWinner(cells, boardSize, sequenceSize);

  const winnerSymbol =
    currentUser === nextUser ? currentUser : cells[winnerSequence?.[0]];

  const handleCellClick = (index: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentUser: getNextUser(
          lastGameState.currentUser,
          usersCount,
          usersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) => {
          return i === index ? lastGameState.currentUser : cell;
        }),
      };
    });
  };

  const handleUserTimeOver = (symbol: string) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        usersTimeOver: [...lastGameState.usersTimeOver, symbol],
        currentUser: getNextUser(
          lastGameState.currentUser,
          usersCount,
          usersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    currentUser,
    nextUser,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handleUserTimeOver,
  };
}
