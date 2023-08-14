import clsx from "clsx";
import { HTMLAttributes } from "react";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit";

export function GameField({ className }: HTMLAttributes<string>) {
  return (
    <section className={clsx(className, "bg-orange-50 shadow-lg px-8 py-4")}>
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
        <div className="ml-auto flex items-center gap-3">
          <UiButton className="" size="md" variant="primary">
            Dead heat
          </UiButton>
          <UiButton className="" size="md" variant="outline">
            Surrender
          </UiButton>
        </div>
      </header>
    </section>
  );
}
