import { Game } from "../components/refactor-game";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function HomePage() {
  return (
    <HomePageLayout header={<Header />} footer={<Footer />}>
      <Game />
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
