import clsx from "clsx";

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
    <section className="bg-orange-50 shadow-lg px-8 py-6 mb-4">
      <section className="pl-2">
        {backLink}
        {appTitle}
        {gameInfo}
      </section>
    </section>
  );
}
