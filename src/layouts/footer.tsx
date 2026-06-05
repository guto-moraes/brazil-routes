import { useQueryMenu } from "@/hooks/queries/menus";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import builtby from "@/assets/images/builtby.webp";

const copyDate = () => {
  const currentYear = new Date().getFullYear();
  if (currentYear === 2026) {
    return "2026";
  }
  return `2026-${currentYear}`;
};

const Footer = () => {
  const { menuItems: footerLinks } = useQueryMenu("Rodape").data.menu;
  const { menuItems: socials } = useQueryMenu("Social").data.menu;

  return (
    <>
      <footer className="bg-bege-800 dark:bg-dark-950 w-full flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 p-4 md:py-6 lg:py-8 xl:py-10">
        <div className="h-full container mx-auto sm:flex flex-col gap-y-4 content-center hidden">
          {/* Footer Menu */}
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-start gap-3">
              {footerLinks.nodes.map(({ uri, label }, index) => (
                <li key={index}>
                  <a
                    href={uri}
                    className={cn(
                      "text-xs text-chocolate-300 dark:text-dark-contrast-100 hover:text-chocolate-400",
                      "dark:hover:text-dark-contrast-100 font-semibold uppercase transition-colors duration-300"
                    )}
                    title={label}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social Media */}
            {socials.nodes.map(({ uri, label }, index) => (
              <a
                key={index}
                href={uri}
                className={cn(
                  "text-xs text-chocolate-300 dark:text-dark-contrast-100",
                  "hover:text-chocolate-400 dark:hover:text-dark-contrast-100/50 font-semibold uppercase"
                )}
                title="Siga-nos no Instagram"
                target="_blank"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <Separator className="bg-white/25 h-px container mx-auto hidden sm:block" />
        <div className={cn(
          "copyright lg:container lg:mx-auto text-xs text-white whitespace-break-spaces",
          "flex flex-col lg:flex-row justify-between items-center gap-3"
        )}>
          <p className="text-center">
            &copy;{copyDate()}{" "}
            <span className="text-chocolate-300 dark:text-dark-contrast-100 font-medium">
              Projeto Caminhos do Brasil Central
            </span>
            . Alguns direitos reservados.
          </p>
          <p className="text-white/35 w-max flex justify-between items-center gap-1.5 group/author">
            <span>Desenvolvido por</span>
            <img className="size-6 opacity-35" src={builtby} alt="Desenvolvido por Guto Moraes" />
            <a
              href="mailto:joseaugusto.teo@gmail.com"
              title="Entre em contato com Guto Moraes"
              className={cn(
                "text-[0.725rem] text-white/35 hover:text-chocolate-300 dark:hover:text-dark-contrast-100",
                "font-bold uppercase leading-3 transition-colors duration-300"
              )}
            >
              Guto Moraes
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
