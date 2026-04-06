import { Link } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import builtby from "@/assets/images/builtby.webp";

type FooterData = {
  title: string;
  href: string;
};

const footerSections: FooterData[] = [
  {
    title: "Sobre o Projeto",
    href: "/o-projeto",
  },
  {
    title: "Almanaque Digital",
    href: "/almanaque-digital",
  },
  {
    title: "Linha do Tempo",
    href: "/linha-do-tempo",
  },
  {
    title: "Recursos Educativos",
    href: "/recursos-educativos",
  },
  {
    title: "Fale Conosco",
    href: "/fale-conosco",
  },
];

const date = () => {
  const currentYear = new Date().getFullYear();
  if (currentYear === 2026) {
    return "2026";
  }

  return `2026-${currentYear}`;
};

const Footer = () => {
  return (
    <footer className="bg-bege-800 py-16 w-full">
      <div className="max-w-384 mx-auto px-4 xl:px-0">
        <div className="h-full flex flex-col gap-y-4 content-center">
          {/* Footer Menu */}
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-start gap-3">
              {footerSections.map(({ title, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="text-xs text-chocolate-300 hover:text-chocolate-400 font-semibold uppercase transition-colors duration-300"
                    title={title}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social Media */}
            <a
              href="#"
              className="text-xs text-chocolate-300 hover:text-chocolate-400 font-semibold uppercase"
              title="Siga-nos no Instagram"
              target="_blank"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-chocolate-300 hover:text-chocolate-400 transition-colors duration-300"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg> */}
              Instagram
            </a>
          </div>
          {/* Separator */}
          <Separator className="bg-white/25 h-px" />

          {/* Copy Rights */}
          <div className="text-xs text-white font-light flex justify-between items-center gap-4">
            <p className="w-max">
              &copy;{date()} <strong>Caminhos do Brasil Central</strong> .
              Alguns direitos reservados.
            </p>
            <Link
              to="/"
              title="Políticas de Privacidade"
              className="text-white hover:text-chocolate-300 transition-colors duration-300"
            >
              Política de Privacidade
            </Link>
            <div className="text-white/35 w-max flex justify-between items-center gap-1.5 group/author">
              <span>Desenvolvido por</span>
              <img
                className="size-6 opacity-35"
                src={builtby}
                alt="Desenvolvido por Guto Moraes"
              />
              <a
                href="mailto:joseaugusto.teo@gmail.com"
                title="Entre em contato com Guto Moraes"
                className="text-[0.725rem] text-white/35 hover:text-chocolate-300 font-bold uppercase leading-3 transition-colors duration-300"
              >
                Guto Moraes
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
