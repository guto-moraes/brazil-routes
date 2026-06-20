import { useQueryPartners } from "@/hooks/queries/theme-queries";
import { cn } from "@/lib/utils";
import type { PartnerType } from "@/types/theme-types";

const Partners = () => {
  const { data } = useQueryPartners();
  const partners = data.project.theming.partners;

  return (
    <section className="shadow-lg bg-tan-100 dark:bg-dark-900 p-4 xl:p-0 xl:h-44">
      <div className="container max-w-6xl mx-auto h-full w-full px-4 xl:px-0 md:px-8 flex items-center justify-center">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-tan-700 dark:text-dark-contrast-100 mb-2 pl-8">Realização</h3>
          <ul className="max-w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(6,minmax(200px,1fr))] gap-8 place-items-center">
            {partners.map((partner: PartnerType, index: number) => {
              return (
                <li key={index} className="last:border-l last:border-tan-900 dark:last:border-white last:pl-8">
                  <a
                    href={partner.url}
                    className="overflow-hidden"
                    title={partner.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={partner.image.node.guid} title={partner.name} alt={partner.name} className={cn("block dark:hidden xl:max-h-12.5")} />
                    <img src={partner.negativeImage.node.guid} title={partner.name} alt={partner.name} className={cn("hidden dark:block xl:max-h-12.5")} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
