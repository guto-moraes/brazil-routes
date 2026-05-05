import { cn, sanitizedData } from "@/lib/utils";
import { HorizontalSlideItem } from "./horizontal-slide-scroll";

const ColHeader = ({ className, text }: { className: string; text: string }) => (
  <div className={cn("text-sm text-bone-800 font-medium uppercase flex items-center px-8", className)}>{text}</div>
);

const Badge = ({ text }: { text: string }) => (
  <span
    className={cn(
      "rounded-2xl border border-bone-700 text-[0.625rem] text-bone-700",
      "font-medium uppercase leading-[1.125] w-max py-1 px-2.5",
    )}
  >
    {text}
  </span>
);

const Heading2 = ({ text, textColor }: { text: string; textColor: string; }) => (
  <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.125]" style={{ color: textColor }}>{text}</h2>
);

const Heading3 = ({ text, textColor }: { text: string; textColor: string; }) => (
  <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold leading-[1.125]" style={{ color: textColor }}>{text}</h2>
);

const Figure = ({
  height,
  image,
  imageAlt,
  caption,
}: {
  height: number;
  image: string;
  imageAlt: string;
  caption: string;
}) => (
  <figure className="relative rounded-3xl h-80 w-full" style={{ height: `${height}px` }}>
    <img className="rounded-3xl h-full w-full object-cover object-top" src={image} alt={imageAlt} />
    <figcaption
      className={cn(
        "rounded-tr-3xl rounded-bl-3xl bg-black/60 text-[0.625rem] text-white",
        "font-medium absolute top-0 right-0 py-1 px-3.5",
      )}
    >
      {caption}
    </figcaption>
  </figure>
);

const Paragraph = ({ content }: { content: string }) => {
  return (
    <div className="text-lg text-bone-800 text-balance hyphens-auto" dangerouslySetInnerHTML={sanitizedData(content)} />
  );
};

type TimelineTypes = {
  colorHeaderBar: string;
  textColor: string;
  borderColor: string;
  year: string;
  headers: string[];
  firstCol: {
    badgeText: string;
    heading: string;
    figure: {
      height: number;
      imageSrc: string;
      imageAlt: string;
      caption: string;
    };
  };
  secondCol: {
    badgeText: string;
    heading: string;
    figure: {
      height: number;
      imageSrc: string;
      imageAlt: string;
      caption: string;
    };
  };
  thirdCol: {
    badgeText: string;
    heading: string;
    content: string;
  };
};

const timeline: TimelineTypes[] = [
  {
    colorHeaderBar: "#8e948799",
    textColor: "#2f312c",
    borderColor: "#8e948766",
    year: "1930",
    headers: ["24 de Outubro", "3 de Novembro", "8 de Novembro"],
    firstCol: {
      badgeText: "Golpe de 1930",
      heading: "Washington Luís é deposto da presidência",
      figure: {
        height: 320,
        imageSrc: "/images/timeline/deposicao-washington-luis__24-10-1930.jpeg",
        imageAlt: "Washington Luís deixa o Palácio da Guanabara após ser deposto",
        caption: "Fonte: O Globo (1930[2026], online)",
      },
    },
    secondCol: {
      badgeText: "Posse de Getúlio",
      heading: "Após liderar o golpe de estado, Getúlio assume a presidência",
      figure: {
        height: 480,
        imageSrc: "/images/posse-getulio.webp",
        imageAlt: "Posse de Getúlio Vargas no Palácio do Catete (RJ)",
        caption: "Fonte: Memório da Democracia (2026, online)",
      },
    },
    thirdCol: {
      badgeText: "Anistia",
      heading: "Militares das Revoltas de 1922 e 1924 são anistiados",
      content:
        "\n<p>Participantes das revoltas de 1922 e 1924 têm suas promoções reparadas Logo após a assinatura do decreto, ministros militares ordenam a organização, com urgência, de uma relação de todos os oficiais que, por terem participado dos levantes de 1922 e 1924, haviam sido prejudicados em suas promoções. Para efeito de reparação, a relação deve incluir também os postos que esses oficiais deveriam ocupar atualmente.</p>\n",
    },
  },
];

const TimelineSlide = ({ id }: { id: string }) => {
  return (
    timeline &&
    timeline.map((item) => { 

        const styleHeaderBar = {
            backgroundColor: item.colorHeaderBar,
            borderColor: item.borderColor,
        } as React.CSSProperties
        
        const styleContentBorder = {
            borderColor: item.borderColor,
        } as React.CSSProperties

        return (
      <HorizontalSlideItem id={id} bgColor="#c1c9b8" className="h-svh w-full flex flex-col" key={item.year}>
        <div className="h-7 w-full flex divide-x [&:not(last-child)]:divide-x divide-dashed" style={styleHeaderBar}>
          {item.headers.map((date, idx) => (
            <ColHeader className={idx === 1 ? "flex-4" : "flex-2"} text={date} key={idx} />
          ))}
          <ColHeader className="flex-1 justify-center" text="Ano" />
        </div>
        <div className="grow w-full flex divide-x divide-dashed" style={ styleContentBorder }>
          <div className="flex-2 flex flex-col justify-end gap-y-8 px-8 pb-32">
            <hr className="h-px border-px border-dashed bg-none" style={{ borderColor: `${item.borderColor}` }} />
            <div className="w-full flex flex-col gap-y-4">
              <Badge text={item.firstCol.badgeText} />
              <Heading3 text={item.firstCol.heading} textColor={item.textColor} />
            </div>
            <Figure
              height={item.firstCol.figure.height}
              image={item.firstCol.figure.imageSrc}
              imageAlt={item.firstCol.figure.imageAlt}
              caption={item.firstCol.figure.caption}
            />
          </div>
          <div className="flex-4 flex flex-col justify-end gap-y-8 px-8 pb-32">
            <hr className="h-px border-px border-dashed bg-none" style={{ borderColor: item.borderColor }} />
            <div className="w-full flex flex-col gap-y-4">
              <Badge text={item.secondCol.badgeText} />
              <Heading2 text={item.secondCol.heading} textColor={item.textColor} />
            </div>
            <Figure
              height={item.secondCol.figure.height}
              image={item.secondCol.figure.imageSrc}
              imageAlt={item.secondCol.figure.imageAlt}
              caption={item.secondCol.figure.caption}
            />
          </div>
          <div className="flex-2 flex flex-col justify-end gap-y-8 px-8 pb-32">
            <hr className="h-px border-px border-dashed bg-none" style={{ borderColor: item.borderColor }} />
            <div className="w-full flex flex-col gap-y-4">
              <Badge text={item.thirdCol.badgeText} />
              <Heading3 text={item.thirdCol.heading} textColor={item.textColor} />
            </div>
            <Paragraph content={item.thirdCol.content} />
          </div>
          <div className="flex-1 relative flex flex-col justify-end gap-y-8 px-8 pb-8">
            <h2
              className={cn(
                "text-[clamp(2rem,10vw,18rem)] text-bone-800/20 font-mono font-black leading-[1.125] -tracking-[0.085em]",
                "absolute top-28 left-1/2 -translate-x-1/2 rotate-90 will-change-transform",
              )}
            >
              {item.year}
            </h2>
          </div>
        </div>
      </HorizontalSlideItem>
    )})
  );
};

export default TimelineSlide;
