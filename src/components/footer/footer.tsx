import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-slate-dark ">
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="row-start-3 flex justify-between items-center">
          {/* Links à direita */}
          <div className="flex gap-4">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.instagram.com/healthchain-brasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
                style={{ filter: "invert(100%)" }}
              />
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="linkedin.com/company/healthchain-brasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                style={{ filter: "invert(100%)" }}
              />
            </a>
          </div>

          {/* Nome à esquerda */}
          <div className="text-white text-1xl font-bold">
            <p>HEALTHCHAIN</p>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-xs text-center pb-1">
        <p>© 2025 Healthchain. CNPJ 53.351.091/0001-76</p>
      </div>
    </footer>
  );
};
