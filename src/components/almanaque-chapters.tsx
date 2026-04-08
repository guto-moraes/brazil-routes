"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const AlmanaqueChapters = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  });

  return(
    <>
        <section className="intro bg-chocolate-300 h-svh w-full grid place-content-center">
            <h2 className="text-8xl text-white font-cabinet font-black">Início</h2>
        </section>

        <section className="stickys relative bg-tan-800 text-tan-200 h-svh w-full overflow-hidden p-2">
            <div className="sticky-cols relative h-full w-full">
                <div className="col col-1 absolute h-full w-1/2 will-change-transform">
                    <div className="col-content relative h-full w-full p-2">
                        <div className="col-content-wrapper relative rounded-2xl bg-tan-700 h-full w-full flex flex-col justify-between overflow-hidden">
                            <h2 className="text-5xl text-tan-400 font-cabinet font-medium leading-[1.1] w-[60%] p-10">
                                A memória de pessoas que viveram durante os anos de atuação da FBC
                            </h2>
                            <p className="text-base text-white font-medium w-[60%] p-10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta velit ex vero esse fugiat labore corrupti, iste adipisci debitis consequatur eos, accusamus necessitatibus eum sint cumque quasi ullam temporibus. Quia, laborum!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col-2 absolute h-full w-1/2 will-change-transform translate-x-full">
                    <div className="col-img col-img-1 h-full w-full p-2 absolute top-0 left-0">
                        <div className="col-img-wrapper relative rounded-2xl bg-tan-600 h-full w-full overflow-hidden">
                            <img className="h-full w-full object-cover" src="/images/experiments/1.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-img col-img-2 h-full w-full p-2 absolute top-0 left-0 [clip-path:polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)]">
                        <div className="col-img-wrapper relative rounded-2xl bg-tan-700 h-full w-full overflow-hidden">
                            <img className="h-full w-full object-cover transform scale-125" src="/images/experiments/2.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col col-3 absolute h-full w-1/2 will-change-transform translate-full p-2">
                    <div className="col-content-wrapper-1 relative rounded-2xl bg-tan-700 h-full w-full p-10 flex flex-col justify-between overflow-hidden">
                        <h2 className="text-5xl text-tan-400 font-cabinet font-medium leading-[1.1] w-[60%] p-10">
                            A história também se faz de memórias
                        </h2>
                        <p className="text-base text-white font-medium w-[60%] p-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sit sunt ipsa maiores! Dolor impedit minima adipisci officia dignissimos quis eveniet consequuntur suscipit maxime rem? Facilis ex nemo fugit asperiores.
                        </p>
                    </div>
                    <div className="col-content-wrapper-2 rounded-2xl bg-tan-600 h-full w-full p-10 absolute top-0 left-0 flex flex-col justify-between overflow-hidden">
                            <h2 className="text-5xl text-tan-400 font-cabinet font-medium leading-[1.1] w-[60%]">
                                A memória de pessoas que viveram durante os anos de atuação da FBC
                            </h2>
                            <p className="text-base text-white font-medium w-[60%] p-10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta velit ex vero esse fugiat labore corrupti, iste adipisci debitis consequatur eos, accusamus necessitatibus eum sint cumque quasi ullam temporibus. Quia, laborum!
                            </p>
                    </div>
                </div>
                <div className="col col-4 absolute h-full w-1/2 will-change-transform translate-full">
                    <div className="col-img relative h-full w-full p-2">
                        <div className="col-img-wrapper relative rounded-2xl bg-tan-700 h-full w-full overflow-hidden">
                            <img className="h-full w-full object-cover" src="/images/experiments/3.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="other bg-mate-500 h-svh w-full grid place-content-center">
            <h2 className="text-8xl text-white font-cabinet font-black">Fim</h2>
        </section>
    </>
  );
};

export default AlmanaqueChapters;
