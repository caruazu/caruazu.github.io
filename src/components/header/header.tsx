import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header id="header" className="bg-forest-light">
      <div className="container flex items-center justify-between  w-full max-w-7xl mx-auto p-6">
        <div className="text-1xl font-bold text-gray-800">
          <Link href={"/"}>HEALTHCHAIN</Link>
        </div>

        <nav className="flex items-center space-x-6">
          <Link href={"#projetos"}>Projetos</Link>
          <Link href={"#planos"}>Preços</Link>
          <Link href="#contato">
            <Button className="cursor-pointer">Contato</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
