import { MOVE_ORDER } from "../constants";
import { IState } from "../types";

export function getNextUser(state: IState) {
  const { currentUser, usersCount, usersTimeOver } = state;

  const moveOrdersInGame = MOVE_ORDER.slice(0, usersCount).filter(
    (symbol) => !usersTimeOver.includes(symbol),
  );

  const nextUserIndex = moveOrdersInGame.indexOf(currentUser) + 1;
  return moveOrdersInGame[nextUserIndex] ?? moveOrdersInGame[0];
}
