import { useGameState } from "../game";

import { GameActions } from "./ui/Game-actions";
import { GameLayout } from "./ui/Game-layout";
import GameMoveInfo from "./ui/Game-move-info";
import { PlayerInfo } from "./ui/Player-info";
import { AppTitle } from "./ui/App-title";
import { BackLink } from "./ui/Back-link";
import { GameInfo } from "./ui/Game-info";
import { GameCell } from "./ui/Game-cell";

import { PLAYERS } from "./constants";

const USER_COUNT = 4;

export function Game() {
  const {
    cells,
    winnerSymbol,
    winnerSequence,
    currentUser,
    nextUser,
    handleCellClick,
  } = useGameState(USER_COUNT);
  return (
    <GameLayout
      backLink={<BackLink />}
      appTitle={<AppTitle />}
      gameInfo={
        <GameInfo isRatingGame timerMode={"1 minute per turn"} usersCount={4} />
      }
      players={PLAYERS.map((player, index) => (
        <PlayerInfo
          key={player.id}
          avatar={player.avatar}
          name={player.name}
          symbol={player.symbol}
          rating={player.rating}
          seconds={60}
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
          onClick={() => handleCellClick(index)}
          cellSymbol={cell}
        />
      ))}
    />
  );
}
