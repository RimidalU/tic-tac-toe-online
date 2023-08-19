import { MOVE_ORDER } from "../constants";

export function getNextUser(
  currentUser: string,
  usersCount: number,
  usersTimeOver: string[],
) {
  const moveOrdersInGame = MOVE_ORDER.slice(0, usersCount).filter(
    (symbol) => !usersTimeOver.includes(symbol),
  );

  const nextUserIndex = moveOrdersInGame.indexOf(currentUser) + 1;
  return moveOrdersInGame[nextUserIndex] ?? moveOrdersInGame[0];
}
