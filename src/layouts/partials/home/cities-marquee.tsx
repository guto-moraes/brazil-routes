import { Marquee } from "@/components/ui/marquee";

const CitiesMarquee = () => {
  return (
    <div className="h-40 bg-mate-600 dark:bg-dark-950 flex items-center">
      <Marquee className="[--duration:20s] border-y border-white dark:border-dark-50" pauseOnHover>
        <section className="text-white dark:text-dark-50 uppercase h-32 w-full flex justify-start items-center gap-16 px-8">
          <div className="flex flex-col">
            <h2 className="text-6xl font-black">General</h2>
            <h2 className="text-6xl tracking-tighter">Carneiro</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-6xl -tracking-widest">Barra do</h2>
            <h2 className="text-6xl font-black">Garças</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-black tracking-tight">Serra do</h2>
            <h2 className="text-6xl -tracking-widest">Roncador</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl -tracking-widest">Vale dos</h2>
            <h2 className="text-6xl font-black tracking-tight">Sonhos</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-6xl font-black tracking-tight">Indiana</h2>
            <h2 className="text-6xl">nópolis</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl tracking-tight">Rio das</h2>
            <h2 className="text-6xl font-black -tracking-widest">Mortes</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-black">Nova</h2>
            <h2 className="text-6xl tracking-tighter">Xavantina</h2>
          </div>
        </section>
      </Marquee>
      <Marquee className="[--duration:20s] border-y border-white dark:border-dark-50" reverse pauseOnHover>
        <section className="text-white dark:text-dark-50 uppercase h-32 w-full flex justify-start items-center gap-16 px-8">
          <div className="flex flex-col">
            <h2 className="text-6xl font-black">General</h2>
            <h2 className="text-6xl tracking-tighter">Carneiro</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-6xl -tracking-widest">Barra do</h2>
            <h2 className="text-6xl font-black">Garças</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-black tracking-tight">Serra do</h2>
            <h2 className="text-6xl -tracking-widest">Roncador</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl -tracking-widest">Vale dos</h2>
            <h2 className="text-6xl font-black tracking-tight">Sonhos</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-6xl font-black tracking-tight">Indiana</h2>
            <h2 className="text-6xl">nópolis</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl tracking-tight">Rio das</h2>
            <h2 className="text-6xl font-black -tracking-widest">Mortes</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-black">Nova</h2>
            <h2 className="text-6xl tracking-tighter">Xavantina</h2>
          </div>
        </section>
      </Marquee>
    </div>
  );
};

export default CitiesMarquee;
