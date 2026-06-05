import { Marquee } from "@/components/ui/marquee";
import { useQueryPressReleases } from "@/hooks/queries/custom-posts-queries";
import { useQueryPressReleaseSection } from "@/hooks/queries/theme-queries";
import { sanitizedData } from "@/lib/utils";

const Press = () => {
  const { nodes: press } = useQueryPressReleases().data.releases;
  const { pressDescription } = useQueryPressReleaseSection().data.project.theming;
  return (
    <section className="bg-bege-50 dark:bg-dark-800 flex flex-col gap-y-16 py-12 sm:py-18 md:py-24 lg:py-32 max-sm:px-4">
      <div className="container mx-auto flex flex-col justify-center items-center gap-y-8">
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] text-bone-600 dark:text-artic-200 max-sm:text-center font-cabinet font-black max-sm:leading-none">
          Divulgação do Almanaque nas Mídias
        </h2>
        <div
          className="max-w-5xl mx-auto [&_p]:text-[clamp(1rem,1.75vw,1.125rem)] [&_p]:text-center [&_p]:text-bone-700 dark:[&_p]:text-artic-50"
          dangerouslySetInnerHTML={sanitizedData(pressDescription)}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {press.length > 3 ? (
          <Marquee className="[--duration:20s] p-0" pauseOnHover>
            {press.map((item, index) => (
              <a key={index} href={item.newsLink.url} title={item.title} target="_black" rel="noopener noreferrer">
                <img className="rounded-lg h-32" src={item.featuredImage.node.sourceUrl} alt={item.title} key={index} />
              </a>
            ))}
          </Marquee>
        ) : (
          <div className="flex justify-center items-center gap-x-8">
            {press.map((item, index) => (
              <a key={index} href={item.newsLink.url} title={item.title} target="_black" rel="noopener noreferrer">
                <img className="rounded-lg h-32" src={item.featuredImage.node.sourceUrl} alt={item.title} key={index} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Press;
