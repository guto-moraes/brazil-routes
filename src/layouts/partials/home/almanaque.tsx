"use client";

import { motion } from "motion/react";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";

const Almanaque = () => {
  return (
    <div className="bg-tan-200 w-full">
      <div className="py-32 max-w-7xl w-full mx-auto grid grid-cols-3 gap-16">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn"
          }}
          className="col-span-1 h-full w-full"
        >
          <img
            src="/images/tablet-cover-book.png"
            alt="Capa do e-book Caminhos do Brasil Central"
            className="w-full h-full drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn"
          }}
          className="relative col-span-2 rounded-2xl bg-tan-100 overflow-hidden p-8"
        >
          <img
            src="/images/logo-icon.webp"
            alt="Ícon do Projeto Caminhos do Brasil Central"
            className="w-50 absolute -bottom-16 -left-16 opacity-35"
          />
          <div className="xl:min-h-full">
            <h2 className="text-6xl text-chocolate-400 font-cabinet font-black">
              Almanaque Digital
            </h2>
            <p className="mt-8 xl:text-2xl text-tan-800 text-justify hyphens-auto">
              O Almanaque{" "}
              <strong>Desbravando o sertão, conconquistando o Brasil</strong>:{" "}
              <em>
                a Expedição Roncador-Xingu e a Fundação Brasil Central em Mato
                Grosso (1943/1967)
              </em>
              , projeto inédito que contou com financiamento da Fundação de
              Amparo à Pesquisa do Estado de Mato Grosso (Fapemat), narra e
              analise a história da expedição forjou a colonização não indígena
              na região que hoje é conhecida como Vale do Araguaia, entre as
              divisas dos estados de Goiás e Mato Grosso, a Expedição
              Roncador-Xingu, bem como dos processos que culminaram com a
              criação e a atuação da Fundação Brasil Central na região e os seus
              desdobramentos.
            </p>
            <div className="w-full flex justify-end items-center mt-8">
              <ButtonLinkWithIcon
                textButton="Saiba mais"
                link="/almanaque-digital/"
                bgColor="bg-chocolate-400 hover:bg-chocolate-500 text-white"
                iconColor="bg-white text-chocolate-700"
                target={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Almanaque;
