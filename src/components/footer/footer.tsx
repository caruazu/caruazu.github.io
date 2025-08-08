import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-slate-300 row-start-3 flex gap-[24px] flex-wrap items-end justify-end p-10">
      {/* <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://wa.me/message/Y7VNNQW6QXP2K1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/whatsapp.svg"
          alt="File icon"
          width={32}
          height={32}
          style={{ filter: "invert(100%)" }}
        />
      </a> */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/caruazu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/instagram.svg"
          alt="File icon"
          width={32}
          height={32}
          style={{ filter: "invert(100%)" }}
        />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/caruazu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/linkedin.svg"
          alt="File icon"
          width={32}
          height={32}
          style={{ filter: "invert(100%)" }}
        />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/caruazu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="File icon"
          width={32}
          height={32}
          style={{ filter: "invert(100%)" }}
        />
      </a>
      {/* <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="mailto:gustavo@caruazu.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/mail.svg"
          alt="File icon"
          width={32}
          height={32}
          style={{ filter: "invert(100%)" }}
        />
      </a> */}
    </footer>
  );
};
