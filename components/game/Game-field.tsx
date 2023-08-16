import clsx from "clsx";

import { GameSymbol } from "./Game-symbol";
import { UiButton } from "../uikit";

const actions = (
  <>
    <UiButton size="md" variant="primary">
      Dead heat
    </UiButton>
    <UiButton size="md" variant="outline">
      Surrender
    </UiButton>
  </>
);

export function GameField({
  className,
  cells,
  currentUser,
  nextUser,
  handleCellClick,
}: {
  className: string;
  cells: any[];
  currentUser: string;
  nextUser: string;
  handleCellClick: (index: number) => void;
}) {
  return (
    <GameFieldLayout className={className}>
      <GameHeader
        actions={actions}
        currentUser={currentUser}
        nextUser={nextUser}
      />
      <GameGrid>
        {cells.map((cell, index) => {
          return (
            <GameCell key={index} onClick={() => handleCellClick(index)}>
              {cell && <GameSymbol symbol={cell} />}
            </GameCell>
          );
        })}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({
  children,
  className,
}: {
  children: JSX.Element[];
  className: string;
}) {
  return (
    <section
      className={clsx(className, "bg-orange-50 shadow-lg px-8 py-6 mb-4")}
    >
      {children}
    </section>
  );
}

function GameHeader({
  actions,
  currentUser,
  nextUser,
}: {
  actions: JSX.Element;
  currentUser: string;
  nextUser: string;
}) {
  return (
    <header className="flex items-center">
      <article>
        <div className="flex items-center gap-2 font-semibold text-xl">
          Current User:
          <GameSymbol symbol={currentUser} className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2 text-md font-light text-stone-600">
          Next user:
          <GameSymbol symbol={nextUser} className="w-3 h-3" />
        </div>
      </article>
      <div className="ml-auto flex items-center gap-3">{actions}</div>
    </header>
  );
}

function GameGrid({ children }: { children: JSX.Element[] }) {
  return (
    <article className="grid grid-cols-[repeat(19,_35px)] grid-rows-[repeat(19,_35px)] pt-px pl-px mt-4 justify-center">
      {children}
    </article>
  );
}

function GameCell({
  children,
  onClick,
}: {
  children: JSX.Element | string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="border border-stone-600 hover:bg-red-200 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}
