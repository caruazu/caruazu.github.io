import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header id="header" className="bg-forest-light">
      <div className="container flex items-center justify-between  w-full max-w-7xl mx-auto p-4">
        <div className="text-1xl font-bold text-gray-800">
          <Link href={"/"}>
            HEALTHCHAIN
            <p className="hidden md:inline"> | BRASIL</p>
          </Link>
        </div>

        <nav className="flex items-center space-x-3 md:space-x-6 text-[12px] md:text-[16px]">
          <Link href={"#projetos"}>Projetos</Link>
          <Link href={"#planos"}>Preços</Link>
          <Link href="#contato">
            <Button className="p-2 text-[12px] md:text-[14px] md:p-4 cursor-pointer">
              Contato
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
