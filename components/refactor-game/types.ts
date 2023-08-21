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
  usersCount: number;
};

export type IAction = {
  type: typeof GAME_STATE_ACTIONS.CELL_CLICK;
  index: number;
};