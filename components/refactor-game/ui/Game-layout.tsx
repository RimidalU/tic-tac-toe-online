export function GameLayout({
  backLink,
  appTitle,
  gameInfo,
}: {
  backLink: JSX.Element;
  appTitle: JSX.Element;
  gameInfo: JSX.Element;
}) {
  return (
    <section className="pl-2">
      {backLink}
      {appTitle}
      {gameInfo}
    </section>
  );
}
