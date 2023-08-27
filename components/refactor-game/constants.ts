import { type } from "os";
import Avatar1Icon from "./ui/images/avatar-1.png";
import Avatar2Icon from "./ui/images/avatar-2.png";
import Avatar3Icon from "./ui/images/avatar-3.png";
import Avatar4Icon from "./ui/images/avatar-4.png";

export const GAME_SYMBOLS = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.SQUARE,
  GAME_SYMBOLS.TRIANGLE,
];

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const PLAYERS = [
  {
    id: 1,
    name: "Red Bull",
    rating: 1243,
    avatar: Avatar1Icon,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Harley Quinn",
    rating: 2345,
    avatar: Avatar2Icon,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Dog",
    rating: 1743,
    avatar: Avatar3Icon,
    symbol: GAME_SYMBOLS.SQUARE,
  },
  {
    id: 4,
    name: "Yoda",
    rating: 273,
    avatar: Avatar4Icon,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
];

export const BOARD_SIZES = [
  {
    id: 1,
    value: "3x3",
  },
  {
    id: 2,
    value: "9x9",
  },
  {
    id: 3,
    value: "15x15",
  },
  {
    id: 4,
    value: "19x19",
  },
];
