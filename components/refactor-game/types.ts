import { GAME_STATE_ACTIONS } from "./constants";
import { StaticImageData } from "next/image";

export type IUser = {
  id: number;
  name: string;
  rating: number;
  avatar: StaticImageData;
  symbol: string;
};

export type IState = {
  cells: string[];
  usersTimeOver: string[];
  currentUser: string;
  currentGameStart: number;
  usersCount: number;
  timers: {};
};

export type IAction = {
  type: typeof GAME_STATE_ACTIONS.CELL_CLICK;
  index: number;
  dateNow: number;
};
