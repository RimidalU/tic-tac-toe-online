import { GameLayout } from "./ui/Game-layout";
import { AppTitle } from "./ui/App-title";
import { BackLink } from "./ui/Back-link";
import { GameInfo } from "./ui/Game-info";

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      appTitle={<AppTitle />}
      gameInfo={
        <GameInfo isRatingGame timerMode={"1 minute per turn"} usersCount={4} />
      }
    />
  );
}
