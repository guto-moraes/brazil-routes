"use client";

// import { Link } from "@tanstack/react-router";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevelText = () => {

    // useGSAP(() => {
    //   const lenis = new Lenis();
    //   lenis.on("scroll", ScrollTrigger.update);
    //   gsap.ticker.add((time) => {
    //     lenis.raf(time * 1000);
    //   });

    // });

    return(
        <>
            <section className="hero"></section>
            <section className="main"></section>
            <section className="footer"></section>
        </>
    )
}

export default ScrollRevelText;