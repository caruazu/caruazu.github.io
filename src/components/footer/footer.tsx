import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const LINKS = [
  {
    href: "https://wa.me/message/Y7VNNQW6QXP2K1/",
    label: "WhatsApp",
    Icon: FaWhatsapp,
  },
  {
    href: "https://www.instagram.com/caruazu/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/caruazu/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/caruazu/",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "mailto:gustavo@caruazu.com",
    label: "Email",
    Icon: FaEnvelope,
  },
];

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 lg:gap-12 flex-wrap items-center justify-center p-15">
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={href}
          className="flex items-center gap-2"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="size-10 opacity-75" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </footer>
  );
};
