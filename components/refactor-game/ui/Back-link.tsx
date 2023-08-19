import Link from "next/link";

import { ArrowLeftIcon } from "./icons/arrow-left-icon";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 hover:text-indigo-400 text-lg pb-3"
    >
      <ArrowLeftIcon />
      To Home
    </Link>
  );
}
