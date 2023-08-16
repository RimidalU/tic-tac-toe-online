import { useState } from "react";

import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function HomePage() {
  const [usersCount, _] = useState(4);
  const { cells, currentUser, nextUser, winnerSequence, handleCellClick } =
    useGameState(usersCount);

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <main className="pt-6 max-w-3xl flex-1 mx-auto">
        <GameTitle usersCount={usersCount} />
        <GameInfo
          usersCount={usersCount}
          currentUser={currentUser}
          className="mt-4"
        />
        <GameField
          cells={cells}
          currentUser={currentUser}
          nextUser={nextUser}
          winnerSequence={winnerSequence}
          handleCellClick={handleCellClick}
          className="mt-4"
        />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
