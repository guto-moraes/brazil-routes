"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollableSections = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    const sections = gsap.utils.toArray<HTMLDivElement>(".vertical-section");

    sections.forEach((section) => {
      const large = section.querySelector<HTMLDivElement>(".large-child");
      if (large!.offsetHeight > window.innerHeight - 64) {
        gsap.to(large, {
          y: () => window.innerHeight - large!.clientHeight - 64,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: "top top",
            end: () => "+=" + (large!.offsetHeight - window.innerHeight),
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
      }
    });
  });

  return (
    <>
      <section className="bg-artic-400 h-[calc(100svh-104px)] w-full grid place-content-center overflow-hidden">
        <h2 className="text-8xl text-white font-cabinet font-black">
            Hero
        </h2>
      </section>
      <div className="vertical-section w-full h-screen overflow-hidden flex text-white text-lg" id="sectionOne">
        <div className="w-1/2 h-screen bg-sky-600 flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-semibold mb-8">This doesn't move</h1>
          <img
            src="https://images.unsplash.com/photo-1666146421175-28a429221ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=480&q=60"
            alt=""
          />
        </div>
        <div className="w-1/2 p-8 bg-orange-600">
          <div className="large-child">
            <p className="mb-4">
              Accusantium laudantium recusandae et repudiandae beatae molestiae, ex fugit. Adipisci vitae distinctio
              doloremque libero voluptate. Voluptatibus corporis quod nemo doloremque nihil molestias, minima modi in,
              sunt officiis totam omnis doloribus porro ducimus molestiae distinctio voluptatem itaque rem illum? Fugit,
              quos! Possimus voluptate necessitatibus dicta quis, consequatur nisi quidem libero ex?
            </p>
            <p className="mb-4">
              Dolorem itaque doloremque assumenda illo autem quos nihil qui laborum quasi ea, voluptatum odio at ad
              explicabo. Enim consequuntur illum ipsum! Deserunt excepturi illum, quos magnam accusamus, non, ut rem
              minus aut temporibus at mollitia hic deleniti? Omnis totam assumenda exercitationem ea! Aliquam
              consequuntur iste laboriosam aperiam pariatur sint quae.
            </p>
            <p className="mb-4">
              Nostrum, quia. Error voluptate est quis, laudantium sed soluta repellendus quo illum quam corrupti, minima
              facilis numquam ad? Reprehenderit laborum molestias sed similique. Aliquam iure corporis voluptate,
              dolores, commodi voluptatem cupiditate consequuntur, dolore nulla qui iste quisquam? Sequi saepe nobis
              ullam a, incidunt ipsum pariatur vero mollitia! Repellendus, cumque totam.
            </p>
            <p className="mb-4">
              Repudiandae provident hic voluptate nostrum cumque, quis quibusdam culpa atque necessitatibus fuga
              repellat pariatur, assumenda numquam dicta magni quam quasi voluptatibus? Nam a et laborum repellendus
              non. Repellat corrupti distinctio, consectetur dolores iste vel exercitationem voluptate molestias ab
              aspernatur ipsam odio quia dolorem officia eaque cumque dolorum. Dolore, vero consectetur?
            </p>
            <p className="mb-4">
              Accusantium laudantium recusandae et repudiandae beatae molestiae, ex fugit. Adipisci vitae distinctio
              doloremque libero voluptate. Voluptatibus corporis quod nemo doloremque nihil molestias, minima modi in,
              sunt officiis totam omnis doloribus porro ducimus molestiae distinctio voluptatem itaque rem illum? Fugit,
              quos! Possimus voluptate necessitatibus dicta quis, consequatur nisi quidem libero ex?
            </p>
            <p className="mb-4">
              Dolorem itaque doloremque assumenda illo autem quos nihil qui laborum quasi ea, voluptatum odio at ad
              explicabo. Enim consequuntur illum ipsum! Deserunt excepturi illum, quos magnam accusamus, non, ut rem
              minus aut temporibus at mollitia hic deleniti? Omnis totam assumenda exercitationem ea! Aliquam
              consequuntur iste laboriosam aperiam pariatur sint quae.
            </p>
            <p className="mb-4">
              Nostrum, quia. Error voluptate est quis, laudantium sed soluta repellendus quo illum quam corrupti, minima
              facilis numquam ad? Reprehenderit laborum molestias sed similique. Aliquam iure corporis voluptate,
              dolores, commodi voluptatem cupiditate consequuntur, dolore nulla qui iste quisquam? Sequi saepe nobis
              ullam a, incidunt ipsum pariatur vero mollitia! Repellendus, cumque totam.
            </p>
            <p className="mb-4">
              Repudiandae provident hic voluptate nostrum cumque, quis quibusdam culpa atque necessitatibus fuga
              repellat pariatur, assumenda numquam dicta magni quam quasi voluptatibus? Nam a et laborum repellendus
              non. Repellat corrupti distinctio, consectetur dolores iste vel exercitationem voluptate molestias ab
              aspernatur ipsam odio quia dolorem officia eaque cumque dolorum. Dolore, vero consectetur?
            </p>
            <p className="mb-4">
              Accusantium laudantium recusandae et repudiandae beatae molestiae, ex fugit. Adipisci vitae distinctio
              doloremque libero voluptate. Voluptatibus corporis quod nemo doloremque nihil molestias, minima modi in,
              sunt officiis totam omnis doloribus porro ducimus molestiae distinctio voluptatem itaque rem illum? Fugit,
              quos! Possimus voluptate necessitatibus dicta quis, consequatur nisi quidem libero ex?
            </p>
            <p className="mb-4">
              Dolorem itaque doloremque assumenda illo autem quos nihil qui laborum quasi ea, voluptatum odio at ad
              explicabo. Enim consequuntur illum ipsum! Deserunt excepturi illum, quos magnam accusamus, non, ut rem
              minus aut temporibus at mollitia hic deleniti? Omnis totam assumenda exercitationem ea! Aliquam
              consequuntur iste laboriosam aperiam pariatur sint quae.
            </p>
            <p className="mb-4">
              Nostrum, quia. Error voluptate est quis, laudantium sed soluta repellendus quo illum quam corrupti, minima
              facilis numquam ad? Reprehenderit laborum molestias sed similique. Aliquam iure corporis voluptate,
              dolores, commodi voluptatem cupiditate consequuntur, dolore nulla qui iste quisquam? Sequi saepe nobis
              ullam a, incidunt ipsum pariatur vero mollitia! Repellendus, cumque totam.
            </p>
            <p className="mb-4">
              Repudiandae provident hic voluptate nostrum cumque, quis quibusdam culpa atque necessitatibus fuga
              repellat pariatur, assumenda numquam dicta magni quam quasi voluptatibus? Nam a et laborum repellendus
              non. Repellat corrupti distinctio, consectetur dolores iste vel exercitationem voluptate molestias ab
              aspernatur ipsam odio quia dolorem officia eaque cumque dolorum. Dolore, vero consectetur?
            </p>
          </div>
        </div>
      </div>
      <div className="vertical-section w-full h-screen overflow-hidden flex text-white text-lg" id="sectionTwo">
        <div className="w-1/2  p-8 bg-indigo-600">
          <div className="large-child">
            <p className="mb-4">
              Maxime velit mollitia illo, iusto, ducimus molestiae, cumque ipsam inventore laudantium minima delectus
              fuga ipsa itaque. Reprehenderit assumenda aut harum enim! Iusto mollitia ad ducimus dolor tempora
              molestias harum ratione ipsum corrupti. Et accusantium eius temporibus quidem voluptatibus aperiam, sit,
              neque enim totam consequuntur ad. Soluta labore et sequi at.
            </p>
            <p className="mb-4">
              Dicta nulla odio nesciunt cum neque veniam eveniet! Tenetur eum aliquam deleniti ab suscipit quibusdam
              quae! In quidem molestias necessitatibus, impedit sint excepturi velit ipsa eaque ab asperiores quisquam
              iusto voluptate! Temporibus asperiores pariatur nesciunt, veniam iusto quos ad rem vitae expedita numquam
              autem molestias porro nulla, illo fugiat. Laboriosam!
            </p>
            <p className="mb-4">
              At, adipisci ab voluptatum eligendi laboriosam commodi necessitatibus id eius inventore. Quasi ipsam totam
              ex libero adipisci? Dignissimos dolorum possimus non architecto suscipit sit, fugit assumenda quae?
              Reprehenderit architecto nemo, tempora doloribus adipisci officiis incidunt illo ipsa cumque et iusto
              nostrum inventore veniam recusandae officia non? Nulla, modi voluptatum? Molestias.
            </p>
            <p className="mb-4">
              Et magnam, itaque, consectetur quo praesentium a nemo, earum nobis autem vitae quis illo expedita. Numquam
              iure molestias porro inventore, ratione perferendis quisquam praesentium exercitationem doloremque
              architecto adipisci autem eaque amet vel maxime recusandae accusamus hic rem quaerat sapiente odit at
              aperiam magni? Dignissimos quae voluptates sint fuga, voluptatem quod.
            </p>
            <p className="mb-4">
              Consequuntur dignissimos vel qui nisi laboriosam voluptate cum praesentium soluta eius, architecto tenetur
              ipsam. Nostrum corrupti reiciendis error? Suscipit perferendis nulla optio atque temporibus vel iste
              obcaecati voluptate sint. Velit, ducimus quidem. Similique id delectus quae nemo cupiditate. Et, libero.
              Assumenda doloribus error fugiat dolorum temporibus facilis, deleniti quis ad!
            </p>
            <p className="mb-4">
              Vel doloremque et rerum quod dolorem porro, assumenda ab quis quasi sint iste rem cupiditate reiciendis
              quia aliquid necessitatibus qui! Aut explicabo recusandae, sit consequatur laborum mollitia obcaecati
              animi tempora aspernatur temporibus! Quidem, voluptatibus voluptas vitae debitis ullam possimus dolorem
              minus accusamus deleniti inventore voluptatem. Officia magni eveniet sunt rem.
            </p>
            <p className="mb-4">
              Maiores ducimus delectus, id eaque labore laudantium earum numquam velit fuga quod. Earum placeat quis ad
              nisi cum reiciendis. Quia explicabo quos, et non voluptatem nostrum est vero harum officiis delectus ipsam
              voluptatibus vel fuga. Doloribus dicta eaque repellendus laborum, officiis voluptas dolorum rem temporibus
              nemo tempore doloremque laboriosam numquam.
            </p>
            <p className="mb-4">
              Natus nihil maxime, error ipsa expedita quod aliquam odit officiis, aperiam eos est consequuntur nobis
              saepe eius quibusdam. Dignissimos veniam aliquid sint ad accusamus a natus, distinctio voluptatibus non?
              Dolore dolores tempore voluptas. Animi dignissimos officiis at numquam reiciendis, accusamus magnam
              sapiente, necessitatibus deserunt, cumque ea molestiae adipisci quos! Eaque!
            </p>
            <p className="mb-4">
              Architecto quibusdam temporibus omnis expedita. Nihil, cupiditate non! Perferendis quis eligendi facere ex
              aperiam deserunt similique numquam. Labore numquam distinctio quam perferendis facilis laboriosam
              explicabo quos facere officia. Et amet aut laudantium sunt ipsum vel molestiae ea officiis explicabo,
              voluptates molestias aliquid neque accusantium numquam eum doloremque sit repellendus id.
            </p>
            <p className="mb-4">
              Quos, saepe. Suscipit, dolores. Nulla, itaque laboriosam ullam voluptatibus soluta reiciendis. Quia nihil
              omnis numquam eveniet nobis aliquid ex est, ratione laborum voluptas ipsam veniam labore nulla molestiae
              dignissimos ad deserunt sapiente repudiandae. Iusto quibusdam praesentium totam unde doloremque
              reprehenderit officia cupiditate! Voluptatem adipisci nesciunt quisquam ab, inventore ex minima.
            </p>
            <p className="mb-4">
              Nulla facilis quisquam expedita doloribus, odio in hic ipsa aliquid ut odit sequi voluptates quam
              asperiores voluptas reiciendis, cupiditate, excepturi numquam porro vero quod quidem accusamus nam labore
              obcaecati! Qui, et numquam error assumenda facilis tenetur ipsam ipsa consectetur eaque, nisi fugit at
              earum magnam saepe consequatur, aut dignissimos voluptate?
            </p>
            <p className="mb-4">
              Commodi eveniet voluptates illo harum, facere atque ipsum esse facilis reiciendis perferendis fugit
              inventore vitae? Eaque ipsa ducimus incidunt, architecto quis sapiente voluptatem deleniti? Sint, corrupti
              molestias soluta magnam natus quam fuga ea, minus assumenda, illum dolores explicabo ad! Quidem commodi
              nulla earum esse atque qui reprehenderit nisi quaerat et.
            </p>
            <p className="mb-4">
              Repellat, sunt nesciunt tempora at veritatis deserunt dolorum vero minima perspiciatis repudiandae? Ab,
              laborum doloribus omnis fugiat, saepe praesentium rerum autem iste eligendi aliquid dignissimos quae,
              reprehenderit perferendis. Quae nulla ut, nihil maiores natus corrupti explicabo, eum a iusto beatae et.
              Placeat illum nostrum eligendi minima vel fuga nihil enim?
            </p>
            <p className="mb-4">
              Unde voluptatum, neque optio voluptatem, ullam necessitatibus ipsa provident quisquam deserunt explicabo
              asperiores sint repellat nisi odio, libero numquam totam ipsum? Exercitationem recusandae tempora enim
              mollitia dolores repudiandae commodi et minus tenetur fugiat nulla dolor sed, delectus dolore. Impedit
              eligendi odit pariatur. Repellendus nobis odio provident ea sequi autem atque?
            </p>
            <p className="mb-4">
              Fuga animi delectus, expedita fugit ad voluptates saepe tenetur doloribus soluta sequi facilis, assumenda
              dolor ipsa eos magni provident laborum nulla modi! Obcaecati deleniti eos ducimus ullam iusto eius aliquid
              voluptates reprehenderit quisquam esse ex commodi temporibus earum porro ipsum impedit natus modi culpa
              dicta, quia nam repellat? Dolore, nihil.
            </p>
            <p className="mb-4">
              Accusantium laudantium recusandae et repudiandae beatae molestiae, ex fugit. Adipisci vitae distinctio
              doloremque libero voluptate. Voluptatibus corporis quod nemo doloremque nihil molestias, minima modi in,
              sunt officiis totam omnis doloribus porro ducimus molestiae distinctio voluptatem itaque rem illum? Fugit,
              quos! Possimus voluptate necessitatibus dicta quis, consequatur nisi quidem libero ex?
            </p>
            <p className="mb-4">
              Dolorem itaque doloremque assumenda illo autem quos nihil qui laborum quasi ea, voluptatum odio at ad
              explicabo. Enim consequuntur illum ipsum! Deserunt excepturi illum, quos magnam accusamus, non, ut rem
              minus aut temporibus at mollitia hic deleniti? Omnis totam assumenda exercitationem ea! Aliquam
              consequuntur iste laboriosam aperiam pariatur sint quae.
            </p>
            <p className="mb-4">
              Nostrum, quia. Error voluptate est quis, laudantium sed soluta repellendus quo illum quam corrupti, minima
              facilis numquam ad? Reprehenderit laborum molestias sed similique. Aliquam iure corporis voluptate,
              dolores, commodi voluptatem cupiditate consequuntur, dolore nulla qui iste quisquam? Sequi saepe nobis
              ullam a, incidunt ipsum pariatur vero mollitia! Repellendus, cumque totam.
            </p>
            <p className="mb-4">
              Repudiandae provident hic voluptate nostrum cumque, quis quibusdam culpa atque necessitatibus fuga
              repellat pariatur, assumenda numquam dicta magni quam quasi voluptatibus? Nam a et laborum repellendus
              non. Repellat corrupti distinctio, consectetur dolores iste vel exercitationem voluptate molestias ab
              aspernatur ipsam odio quia dolorem officia eaque cumque dolorum. Dolore, vero consectetur?
            </p>
          </div>
        </div>
        <div className="w-1/2 h-screen bg-teal-600 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold mb-8">This doesn't move</h1>
          <img
            src="https://images.unsplash.com/photo-1666146421175-28a429221ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=480&q=60"
            alt=""
          />
        </div>
      </div>
      <div className="vertical-section w-full h-screen overflow-hidden flex text-white text-lg" id="sectionThree">
        <div className="w-1/2 h-screen bg-sky-600 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold mb-8">This doesn't move</h1>
          <img
            src="https://images.unsplash.com/photo-1666146421175-28a429221ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=480&q=60"
            alt=""
          />
        </div>
        <div className="w-1/2 p-8 bg-orange-600">
          <div className="large-child">
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quia nam nulla nostrum impedit, amet
              totam voluptatem tenetur veritatis explicabo dolore quaerat, suscipit pariatur dolorum, accusamus nihil
              dolores deleniti. Tempora odit, aut nostrum vel debitis iure soluta repellendus, earum consequuntur
              architecto incidunt cum explicabo animi modi provident fugit quidem nam.
            </p>
            <p className="mb-4">
              Distinctio ipsa, saepe inventore assumenda nostrum maiores dolores. Dolorum nulla error, rem amet iste
              delectus porro laborum saepe dolore earum obcaecati esse cum possimus repellat distinctio perferendis quam
              ex doloribus officiis? Culpa minima animi pariatur sint, id corporis, accusantium suscipit, esse iusto eum
              totam nemo nihil ratione dolor vitae. Eius.
            </p>
            <p className="mb-4">
              Ratione libero nostrum rem nulla nobis quasi, molestiae maxime. Itaque doloremque neque voluptatem,
              obcaecati tenetur dolor quis nisi ad culpa delectus, suscipit voluptatibus eligendi quo dignissimos
              quisquam, non eveniet modi laudantium? Quaerat soluta ea saepe quod, atque asperiores. Libero vero fugiat
              modi optio voluptatem neque excepturi sit ab! Ullam, reiciendis!
            </p>
            <p className="mb-4">
              Quae, dolor neque voluptatibus dignissimos saepe officia, ducimus asperiores accusamus vitae consequatur
              tempore cumque ipsam, doloribus tenetur nemo officiis enim. Recusandae, delectus porro. Consequuntur animi
              explicabo enim ducimus! Cum culpa vitae excepturi eum odit! Iure quisquam, facilis fuga commodi sequi
              rerum, fugiat quam ipsum atque alias qui distinctio quasi expedita.
            </p>
            <p className="mb-4">
              Odit assumenda molestiae dolorem minus magnam error ea similique porro optio fuga at accusamus soluta
              saepe expedita necessitatibus itaque harum, nostrum adipisci deleniti consequuntur rem? Placeat aut
              obcaecati consequatur soluta dicta animi sed facere aliquam, quos odit mollitia dolorem cupiditate
              corrupti modi minus molestiae, reprehenderit sit odio voluptatum, fuga nemo.
            </p>
            <p className="mb-4">
              Laboriosam odio temporibus blanditiis minima nam facere quidem quam cumque modi accusamus odit, corrupti
              voluptates aspernatur quisquam natus minus expedita? Voluptates, officiis maxime incidunt amet aut vitae,
              consectetur in eius ad ullam, repellat dolore nihil laborum sed facilis ut maiores aliquam natus
              voluptatem! Dicta quaerat eum id. Perferendis, inventore praesentium?
            </p>
            <p className="mb-4">
              Maxime velit mollitia illo, iusto, ducimus molestiae, cumque ipsam inventore laudantium minima delectus
              fuga ipsa itaque. Reprehenderit assumenda aut harum enim! Iusto mollitia ad ducimus dolor tempora
              molestias harum ratione ipsum corrupti. Et accusantium eius temporibus quidem voluptatibus aperiam, sit,
              neque enim totam consequuntur ad. Soluta labore et sequi at.
            </p>
            <p className="mb-4">
              Dicta nulla odio nesciunt cum neque veniam eveniet! Tenetur eum aliquam deleniti ab suscipit quibusdam
              quae! In quidem molestias necessitatibus, impedit sint excepturi velit ipsa eaque ab asperiores quisquam
              iusto voluptate! Temporibus asperiores pariatur nesciunt, veniam iusto quos ad rem vitae expedita numquam
              autem molestias porro nulla, illo fugiat. Laboriosam!
            </p>
            <p className="mb-4">
              At, adipisci ab voluptatum eligendi laboriosam commodi necessitatibus id eius inventore. Quasi ipsam totam
              ex libero adipisci? Dignissimos dolorum possimus non architecto suscipit sit, fugit assumenda quae?
              Reprehenderit architecto nemo, tempora doloribus adipisci officiis incidunt illo ipsa cumque et iusto
              nostrum inventore veniam recusandae officia non? Nulla, modi voluptatum? Molestias.
            </p>
            <p className="mb-4">
              Et magnam, itaque, consectetur quo praesentium a nemo, earum nobis autem vitae quis illo expedita. Numquam
              iure molestias porro inventore, ratione perferendis quisquam praesentium exercitationem doloremque
              architecto adipisci autem eaque amet vel maxime recusandae accusamus hic rem quaerat sapiente odit at
              aperiam magni? Dignissimos quae voluptates sint fuga, voluptatem quod.
            </p>
            <p className="mb-4">
              Consequuntur dignissimos vel qui nisi laboriosam voluptate cum praesentium soluta eius, architecto tenetur
              ipsam. Nostrum corrupti reiciendis error? Suscipit perferendis nulla optio atque temporibus vel iste
              obcaecati voluptate sint. Velit, ducimus quidem. Similique id delectus quae nemo cupiditate. Et, libero.
              Assumenda doloribus error fugiat dolorum temporibus facilis, deleniti quis ad!
            </p>
            <p className="mb-4">
              Vel doloremque et rerum quod dolorem porro, assumenda ab quis quasi sint iste rem cupiditate reiciendis
              quia aliquid necessitatibus qui! Aut explicabo recusandae, sit consequatur laborum mollitia obcaecati
              animi tempora aspernatur temporibus! Quidem, voluptatibus voluptas vitae debitis ullam possimus dolorem
              minus accusamus deleniti inventore voluptatem. Officia magni eveniet sunt rem.
            </p>
            <p className="mb-4">
              Maiores ducimus delectus, id eaque labore laudantium earum numquam velit fuga quod. Earum placeat quis ad
              nisi cum reiciendis. Quia explicabo quos, et non voluptatem nostrum est vero harum officiis delectus ipsam
              voluptatibus vel fuga. Doloribus dicta eaque repellendus laborum, officiis voluptas dolorum rem temporibus
              nemo tempore doloremque laboriosam numquam.
            </p>
            <p className="mb-4">
              Natus nihil maxime, error ipsa expedita quod aliquam odit officiis, aperiam eos est consequuntur nobis
              saepe eius quibusdam. Dignissimos veniam aliquid sint ad accusamus a natus, distinctio voluptatibus non?
              Dolore dolores tempore voluptas. Animi dignissimos officiis at numquam reiciendis, accusamus magnam
              sapiente, necessitatibus deserunt, cumque ea molestiae adipisci quos! Eaque!
            </p>
            <p className="mb-4">
              Architecto quibusdam temporibus omnis expedita. Nihil, cupiditate non! Perferendis quis eligendi facere ex
              aperiam deserunt similique numquam. Labore numquam distinctio quam perferendis facilis laboriosam
              explicabo quos facere officia. Et amet aut laudantium sunt ipsum vel molestiae ea officiis explicabo,
              voluptates molestias aliquid neque accusantium numquam eum doloremque sit repellendus id.
            </p>
            <p className="mb-4">
              Quos, saepe. Suscipit, dolores. Nulla, itaque laboriosam ullam voluptatibus soluta reiciendis. Quia nihil
              omnis numquam eveniet nobis aliquid ex est, ratione laborum voluptas ipsam veniam labore nulla molestiae
              dignissimos ad deserunt sapiente repudiandae. Iusto quibusdam praesentium totam unde doloremque
              reprehenderit officia cupiditate! Voluptatem adipisci nesciunt quisquam ab, inventore ex minima.
            </p>
            <p className="mb-4">
              Nulla facilis quisquam expedita doloribus, odio in hic ipsa aliquid ut odit sequi voluptates quam
              asperiores voluptas reiciendis, cupiditate, excepturi numquam porro vero quod quidem accusamus nam labore
              obcaecati! Qui, et numquam error assumenda facilis tenetur ipsam ipsa consectetur eaque, nisi fugit at
              earum magnam saepe consequatur, aut dignissimos voluptate?
            </p>
            <p className="mb-4">
              Commodi eveniet voluptates illo harum, facere atque ipsum esse facilis reiciendis perferendis fugit
              inventore vitae? Eaque ipsa ducimus incidunt, architecto quis sapiente voluptatem deleniti? Sint, corrupti
              molestias soluta magnam natus quam fuga ea, minus assumenda, illum dolores explicabo ad! Quidem commodi
              nulla earum esse atque qui reprehenderit nisi quaerat et.
            </p>
            <p className="mb-4">
              Repellat, sunt nesciunt tempora at veritatis deserunt dolorum vero minima perspiciatis repudiandae? Ab,
              laborum doloribus omnis fugiat, saepe praesentium rerum autem iste eligendi aliquid dignissimos quae,
              reprehenderit perferendis. Quae nulla ut, nihil maiores natus corrupti explicabo, eum a iusto beatae et.
              Placeat illum nostrum eligendi minima vel fuga nihil enim?
            </p>
            <p className="mb-4">
              Unde voluptatum, neque optio voluptatem, ullam necessitatibus ipsa provident quisquam deserunt explicabo
              asperiores sint repellat nisi odio, libero numquam totam ipsum? Exercitationem recusandae tempora enim
              mollitia dolores repudiandae commodi et minus tenetur fugiat nulla dolor sed, delectus dolore. Impedit
              eligendi odit pariatur. Repellendus nobis odio provident ea sequi autem atque?
            </p>
            <p className="mb-4">
              Fuga animi delectus, expedita fugit ad voluptates saepe tenetur doloribus soluta sequi facilis, assumenda
              dolor ipsa eos magni provident laborum nulla modi! Obcaecati deleniti eos ducimus ullam iusto eius aliquid
              voluptates reprehenderit quisquam esse ex commodi temporibus earum porro ipsum impedit natus modi culpa
              dicta, quia nam repellat? Dolore, nihil.
            </p>
            <p className="mb-4">
              Accusantium laudantium recusandae et repudiandae beatae molestiae, ex fugit. Adipisci vitae distinctio
              doloremque libero voluptate. Voluptatibus corporis quod nemo doloremque nihil molestias, minima modi in,
              sunt officiis totam omnis doloribus porro ducimus molestiae distinctio voluptatem itaque rem illum? Fugit,
              quos! Possimus voluptate necessitatibus dicta quis, consequatur nisi quidem libero ex?
            </p>
            <p className="mb-4">
              Dolorem itaque doloremque assumenda illo autem quos nihil qui laborum quasi ea, voluptatum odio at ad
              explicabo. Enim consequuntur illum ipsum! Deserunt excepturi illum, quos magnam accusamus, non, ut rem
              minus aut temporibus at mollitia hic deleniti? Omnis totam assumenda exercitationem ea! Aliquam
              consequuntur iste laboriosam aperiam pariatur sint quae.
            </p>
            <p className="mb-4">
              Nostrum, quia. Error voluptate est quis, laudantium sed soluta repellendus quo illum quam corrupti, minima
              facilis numquam ad? Reprehenderit laborum molestias sed similique. Aliquam iure corporis voluptate,
              dolores, commodi voluptatem cupiditate consequuntur, dolore nulla qui iste quisquam? Sequi saepe nobis
              ullam a, incidunt ipsum pariatur vero mollitia! Repellendus, cumque totam.
            </p>
            <p className="mb-4">
              Repudiandae provident hic voluptate nostrum cumque, quis quibusdam culpa atque necessitatibus fuga
              repellat pariatur, assumenda numquam dicta magni quam quasi voluptatibus? Nam a et laborum repellendus
              non. Repellat corrupti distinctio, consectetur dolores iste vel exercitationem voluptate molestias ab
              aspernatur ipsam odio quia dolorem officia eaque cumque dolorum. Dolore, vero consectetur?
            </p>
          </div>
        </div>
      </div>
      <section className="w-full h-screen flex justify-center items-center bg-gray-800 text-white px-4 py-2">
        <h1 className="text-4xl text-center font-semibold mb-12">Enjoy!!!</h1>
      </section>
    </>
  );
};

export default ScrollableSections;
