export function GameLayout({
  backLink,
  appTitle,
  gameInfo,
  players,
}: {
  backLink: JSX.Element;
  appTitle: JSX.Element;
  gameInfo: JSX.Element;
  players: JSX.Element | JSX.Element[];
}) {
  return (
    <section className="bg-orange-50 shadow-lg px-8 py-6 mb-4">
      <section className="pl-2">
        {backLink}
        {appTitle}
        {gameInfo}
      </section>
      <section className="mt-4 bg-orange-50 shadow-lg px-8 py-4 grid grid-cols-2 gap-3 justify-between">
        {players}
      </section>
    </section>
  );
}
