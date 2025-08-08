import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-1xl font-bold text-gray-800">
          <Link href="/">CARUAZU</Link>
        </div>

        <nav className="flex items-center space-x-6">
          <Link href={""}>Sobre</Link>
          <Link href={""}>Time</Link>

          <Button>Contato</Button>
        </nav>
      </div>
    </header>
  );
};
