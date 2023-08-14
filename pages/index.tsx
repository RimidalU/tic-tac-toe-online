import { Footer } from "../components/footer";
import { GameTitle } from "../components/game";
import { Header } from "../components/header";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <main className="pt-6 max-w-2xl flex-1 mx-auto">
        <GameTitle />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
