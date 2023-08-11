import Image from "next/image";
import logoSrc from "./logo.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-10 bg-orange-50 shadow-lg">
      <Image src={logoSrc} alt="Logo" className="h-20 w-24 "/>
      header
    </header>
  );
}
