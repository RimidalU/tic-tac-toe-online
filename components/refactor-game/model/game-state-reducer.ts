import { GAME_STATE_ACTIONS, GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextUser } from "./get-next-user";
import { IAction, IState } from "../types";

export const initGameState = ({
  usersCount,
  defaultTimer,
  currentGameStart,
}): IState => ({
  cells: new Array(19 * 19).fill(null),
  usersTimeOver: [],
  currentUser: GAME_SYMBOLS.CROSS,
  usersCount,
  currentGameStart,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < usersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

export const gameStateReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, dateNow } = action;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentUser: getNextUser(state),
        currentGameStart: dateNow,
        cells: updateCells(state, index),
        timers: updateTimers(state, dateNow),
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { dateNow } = action;

      if (!isTimeOver(state, dateNow)) {
        return state;
      }

      return {
        ...state,
        currentUser: getNextUser(state),
        currentGameStart: dateNow,
        timers: updateTimers(state, dateNow),
      };
    }
    default: {
      return state;
    }
  }
};

function updateCells(gameState: IState, index: number) {
  return gameState.cells.map((cell, i) => {
    return i === index ? gameState.currentUser : cell;
  });
}

function updateTimers(gameState: IState, dateNow: number) {
  const dif = dateNow - gameState.currentGameStart;
  const timer = gameState.timers[gameState.currentUser];

  return {
    ...gameState.timers,
    [gameState.currentUser]: timer - dif,
  };
}

function isTimeOver(gameState: IState, dateNow: number) {
  const timer = updateTimers(gameState, dateNow)[gameState.currentUser]
  return timer <= 0 ; 
}
