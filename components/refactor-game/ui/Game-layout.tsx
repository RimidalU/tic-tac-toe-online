export function GameLayout({
  backLink,
  appTitle,
  gameInfo,
  players,
  gameMoveInfo,
  actions,
  gameCells,
}: {
  backLink: JSX.Element;
  appTitle: JSX.Element;
  gameInfo: JSX.Element;
  players: JSX.Element | JSX.Element[];
  gameMoveInfo: JSX.Element | JSX.Element[];
  actions: JSX.Element | JSX.Element[];
  gameCells: JSX.Element | JSX.Element[];
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

      <section className="bg-orange-50 shadow-lg px-8 py-6 my-4">
        <header className="flex items-center">
          <article>{gameMoveInfo}</article>
          <div className="ml-auto flex items-center gap-3">{actions}</div>
        </header>
        <article className="grid grid-cols-[repeat(19,_35px)] grid-rows-[repeat(19,_35px)] pt-px pl-px mt-4 justify-center">
          {gameCells}
        </article>
      </section>
    </section>
  );
}
