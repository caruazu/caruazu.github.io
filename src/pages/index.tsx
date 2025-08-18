import { Geist, Geist_Mono } from "next/font/google";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl">CARUAZU</h1>
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
