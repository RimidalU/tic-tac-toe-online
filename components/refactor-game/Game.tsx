import { GameLayout } from "./ui/Game-layout";
import { AppTitle } from "./ui/App-title";
import { BackLink } from "./ui/Back-link";
import { GameInfo } from "./ui/Game-info";
import { PlayerInfo } from "./ui/Player-info";
import { PLAYERS } from "./constants";
import GameMoveInfo from "./ui/Game-move-info";
import { GameActions } from "./ui/Game-actions";

export function Game() {
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
        <GameMoveInfo currentUser={"currentUser"} nextUser={"currentUser"} />
      }
      actions={<GameActions />}
      gameCells={<>gameCells</>}
    />
  );
}
