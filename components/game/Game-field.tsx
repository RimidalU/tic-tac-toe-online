import { HTMLAttributes } from "react";
import clsx from "clsx";

import { UiButton } from "../uikit";

import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";

const cells = new Array(19 * 19).fill(null);

const actions = (
  <>
    <UiButton className="" size="md" variant="primary">
      Dead heat
    </UiButton>
    <UiButton className="" size="md" variant="outline">
      Surrender
    </UiButton>
  </>
);

export function GameField({ className }: HTMLAttributes<string>) {
  return (
    <GameFieldLayout className={className}>
      <GameHeader actions={actions} />
      <GameGrid>
        {cells.map((_, index) => {
          return <GameCell key={index}>{}</GameCell>;
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

function GameHeader({ actions }: { actions: JSX.Element }) {
  return (
    <header className="flex items-center">
      <article>
        <div className="flex items-center gap-2 font-semibold text-xl">
          Current User:
          <ZeroIcon className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2 text-md font-light text-stone-600">
          Next user:
          <CrossIcon className="w-3 h-3" />
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

function GameCell({ children }: { children: JSX.Element[] }) {
  return (
    <button className="border border-stone-600 hover:bg-red-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
}
