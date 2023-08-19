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

  function heddleClose() {
    console.log("Close!");
  }

  return (
    <HomePageLayout header={<Header />} footer={<Footer />}>
      <GameTitle usersCount={usersCount} />
      <GameInfo
        usersCount={usersCount}
        currentUser={currentUser}
        isWinner={!!winnerSymbol}
        onUserPlayerOver={handleUserTimeOver}
        className="mt-4"
      />
      <UiModal width="md" isOpen={winnerSymbol} onClose={heddleClose}>
        <UiModal.Header>Game Over!</UiModal.Header>
        <UiModal.Body>
          <div className="text-xl text-slate-600">
            <span className="font-bold text-indigo-600">User </span>
            is Winner!
          </div>
        </UiModal.Body>
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
    </HomePageLayout>
  );
}

export default HomePage;

function HomePageLayout({ header, children, footer }) {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      {header}
      <main className="pt-6 max-w-3xl flex-1 mx-auto">{children}</main>
      {footer}
    </div>
  );
}
