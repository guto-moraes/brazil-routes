import { Link } from "@tanstack/react-router";
import logo from "@/assets/images/logo.webp";

const Header = () => {
  return (
    <header className="shadow-lg bg-white py-0 h-26 w-full flex justify-center items-center ">
      <div className="container mx-auto">
        <nav className="navigation w-full max-w-384 flex justify-between items-center overflow-x-hidden z-40">
          <div className="nav-logo p-4 lg:px-0 border-none z-50">
            <Link to="/" role="menu-item" title="Página Inicial">
              <img className="w-36 sm:w-48 md:w-52" src={logo} title="Caminhos do Brasil Central" />
            </Link>
          </div>
          <div className="main-menu shrink w-full flex justify-end">
            <ul role="menu" className="flex justify-end items-center gap-8">
              <li role="presentation">
                <Link to="/" role="menu-item" title="Página Inicial">
                  Página Inicial
                </Link>
              </li>
              <li role="presentation">
                <Link to="/sobre-o-projeto" role="menu-item" title="Sobre o Projeto">
                  Sobre o Projeto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
