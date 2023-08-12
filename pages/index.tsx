import { Footer } from "../components/footer";
import { Header } from "../components/header";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <main className="pt-6 max-w-2xl border-2">game</main>
      <Footer />
    </div>
  );
}

export default HomePage;
