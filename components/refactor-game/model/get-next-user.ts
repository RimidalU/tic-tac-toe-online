import { MOVE_ORDER } from "../constants";
import { IState } from "../types";

export function getNextUser(gameState: IState) {
  const { currentUser, usersCount, timers } = gameState;

  const moveOrdersInGame = MOVE_ORDER.slice(0, usersCount).filter(
    (symbol) => timers[symbol] > 0,
  );

  const nextUserIndex = moveOrdersInGame.indexOf(currentUser) + 1;
  return moveOrdersInGame[nextUserIndex] ?? moveOrdersInGame[0];
}
