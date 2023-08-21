import { GAME_STATE_ACTIONS, GAME_SYMBOLS } from "../constants";
import { getNextUser } from "./get-next-user";
import { IAction, IState } from "../types";

export const initGameState = ({ usersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  usersTimeOver: [],
  currentUser: GAME_SYMBOLS.CROSS,
  usersCount,
});

export const gameStateReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index } = action;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentUser: getNextUser(state),
        cells: state.cells.map((cell, i) => {
          return i === index ? state.currentUser : cell;
        }),
      };
    }
    default: {
      return state;
    }
  }
};