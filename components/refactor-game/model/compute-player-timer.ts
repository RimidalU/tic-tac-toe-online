import { IState } from "../types";

export function computePlayerTimer(gameState: IState, playerSymbol: string) {
  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt:
      playerSymbol === gameState.currentUser
        ? gameState.currentGameStart
        : undefined,
  };
}
