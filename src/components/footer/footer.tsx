import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 lg:gap-12 flex-wrap items-center justify-center p-15">
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
  );
};
