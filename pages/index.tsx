import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <main className="pt-6 max-w-3xl flex-1 mx-auto">
        <GameTitle />
        <GameInfo className="mt-4" />
        <GameField className="mt-4" />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
