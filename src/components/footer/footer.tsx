import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

          <div className="text-1xl font-bold text-white">
            <Link href="#header">HEALTHCHAIN</Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto pl-6 pb-3">
        {/* Links à direita */}
        <div className="text-white text-xs font-bold pb-3">
          <p className="flex items-center gap-2 ">
            <Mail className="w-4 h-4" />
            <a
              className="hover:underline"
              href={`mailto:future@healthchain.tec.br`}
            >
              future@healthchain.tec.br
            </a>
          </p>
        </div>

        {/* Nome à esquerda */}
        <div className="text-white text-xs font-bold">
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a className="hover:underline" href={`tel:+55 82 3025-0497`}>
              {"+55 82 3025-0497"}
            </a>
          </p>
        </div>
      </div>

      <div className="text-gray-500 text-xs text-center pb-1">
        <p>© 2025 Healthchain. CNPJ 53.351.091/0001-76</p>
      </div>
    </footer>
  );
};
