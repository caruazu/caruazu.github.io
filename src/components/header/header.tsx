import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header>
      <div className="mx-auto">
        <div className="flex">
          <p>logo</p>
          <p>projetos</p>
          <p>planos</p>
          <p>sobre</p>
          <p>quem somos</p>
          <Button>Bora conversar!</Button>
        </div>
      </div>
    </header>
  );
};
