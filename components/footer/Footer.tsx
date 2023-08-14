import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-14 w-full mx-auto flex items-center justify-center gap-4 text-indigo-600 hover:text-indigo-500 bg-orange-50">
      <Link href="https://github.com/RimidalU" target="_blank">
        <span>&copy;Copyright 2023 </span>
        RimidalU
      </Link>
    </footer>
  );
}
