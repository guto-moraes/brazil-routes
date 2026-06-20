import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.webp";
import negativeLogo from "@/assets/images/logo-negative.webp";

const Brand = ({ isOpen, isHome }: { isOpen: boolean; isHome?: boolean; }) => {
  const logoSrc = isOpen || isHome ? negativeLogo : logo;
  return (
    <Link
      to="/"
      title="Ir para a página inicial"
      className={cn("brand w-32 sm:w-42 lg:w-44 xl:w-48 2xl:w-64 overflow-hidden", isOpen && "z-10")}
    >
      <img
        className="h-full w-full object-cover object-center dark:invert-[1] dark:brightness-0"
        src={logoSrc}
        alt="Projeto Caminhos do Brasil Central"
      />
    </Link>
  );
};

export default Brand;
