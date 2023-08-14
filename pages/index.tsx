import { Footer } from "../components/footer";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <main className="pt-6 w-[700px] flex-1 mx-auto">
        <GameTitle />
        <GameInfo className="mt-8" />
        <GameField className="mt-8" />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
