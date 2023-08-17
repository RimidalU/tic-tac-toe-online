import { useState } from "react";

import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { UiButton, UiModal } from "../components/uikit";

function HomePage() {
  const [usersCount, _] = useState(4);
  const {
    cells,
    currentUser,
    nextUser,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handleUserTimeOver,
  } = useGameState(usersCount);

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <main className="pt-6 max-w-3xl flex-1 mx-auto">
        <GameTitle usersCount={usersCount} />
        <GameInfo
          usersCount={usersCount}
          currentUser={currentUser}
          isWinner={!!winnerSymbol}
          onUserPlayerOver={handleUserTimeOver}
          className="mt-4"
        />
        <UiModal width="md">
          <UiModal.Header>Game Over!</UiModal.Header>
          <UiModal.Body>Body</UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">
              Return
            </UiButton>
            <UiButton size="md" variant="primary">
              New Game
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          cells={cells}
          currentUser={currentUser}
          nextUser={nextUser}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          handleCellClick={handleCellClick}
          className="mt-4"
        />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
