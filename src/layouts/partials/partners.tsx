import { partners } from "@/data/partners";

const Partners = () => {
  return (
    <section className="shadow-lg bg-bege-50 p-4 xl:p-0 xl:h-44">
      <div className="h-full max-w-7xl w-full px-4 xl:px-0 md:px-8 mx-auto flex items-center justify-center">
        <div className="flex flex-col gap-y-2">
          <h3>Realização</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.link}
                  className="flex items-center justify-center"
                  title={partner.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={partner.logo}
                    title={partner.name}
                    alt={partner.name}
                    className={partner.height}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;