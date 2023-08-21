import { useReducer } from "react";

import { gameStateReducer, initGameState } from "./model/game-state-reducer";
import { checkWinner, getNextUser } from "../game/model";

import GameOverModal from "./ui/Game-over-modal";
import { GameActions } from "./ui/Game-actions";
import { GameLayout } from "./ui/Game-layout";
import GameMoveInfo from "./ui/Game-move-info";
import { PlayerInfo } from "./ui/Player-info";
import { AppTitle } from "./ui/App-title";
import { BackLink } from "./ui/Back-link";
import { GameInfo } from "./ui/Game-info";
import { GameCell } from "./ui/Game-cell";

import { GAME_STATE_ACTIONS, PLAYERS } from "./constants";

const USER_COUNT = 2;
const boardSize = 19;
const sequenceSize = 5;
const DEFAULT_TIMER = 70000;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { usersCount: USER_COUNT, defaultTimer: DEFAULT_TIMER , currentGameStart: Date.now()},
    initGameState,
  );

  const { cells, currentUser, usersTimeOver, usersCount, timers, currentGameStart } = gameState;

  const nextUser = getNextUser(currentUser, usersCount, usersTimeOver);

  const winnerSequence = checkWinner(cells, boardSize, sequenceSize);

  const winnerSymbol =
    currentUser === nextUser ? currentUser : cells[winnerSequence?.[0]];

  const winnerName = PLAYERS.find((player) => player.symbol === winnerSymbol);

  console.log(currentGameStart);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        appTitle={<AppTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            timerMode={"1 minute per turn"}
            usersCount={4}
          />
        }
        players={PLAYERS.slice(0, USER_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            symbol={player.symbol}
            rating={player.rating}
            timer={timers[player.symbol]}
            isRight={index % 2 === 1}
            isTimerRunning={false}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentUser={currentUser} nextUser={nextUser} />
        }
        actions={<GameActions />}
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            disabled={!!winnerSymbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
              });
            }}
            cellSymbol={cell}
          />
        ))}
      />
      <GameOverModal
        handleClose={() => {}}
        players={PLAYERS.slice(0, USER_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            symbol={player.symbol}
            rating={player.rating}
            timer={timers[player.symbol]}
            isRight={index % 2 === 1}
            isTimerRunning={false}
          />
        ))}
        winnerName={winnerName?.name}
      />
    </>
  );
}
