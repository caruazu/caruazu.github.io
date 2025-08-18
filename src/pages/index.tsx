import { Geist, Geist_Mono, Rajdhani, Raleway } from "next/font/google";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhaniSans = Rajdhani({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h1
          className={`${rajdhaniSans.className} self-center text-7xl lg:text-9xl`}
        >
          CARUAZU
        </h1>
        <h2
          className={`${geistMono.className} self-center lg:self-end text-sm `}
        >
          Desenvolvo aplicações WEB.
        </h2>
      </main>
      <footer className="row-start-3 flex gap-3 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://wa.me/message/Y7VNNQW6QXP2K1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="size-10" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/caruazu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="size-10" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/caruazu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-10" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/caruazu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-10" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:gustavo@caruazu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="size-10" />
        </a>
      </footer>
    </div>
  );
}
