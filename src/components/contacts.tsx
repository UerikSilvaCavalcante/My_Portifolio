import { CardSocials } from "./ui/cardSocials";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top +=500",
        end: "+=500",
        toggleActions: "restart pause reverse pause",
        // pin: true,
        scrub: 1,
        
      },
    });
    tl.add([
      gsap.fromTo(
        ".appear",
        {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
        }
      ),
    ]);
  });
  return (
    <section
      className="w-full h-full  bg-gray-900 flex flex-col items-center justify-center gap-8 p-8"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="flex text-center text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 font-bold">
          Gostou do meu trabalho?
        </h1>
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="flex text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 font-bold">
            Entre em contato comigo
          </h1>
          <div className="flex items-center justify-center cardAbout ">
            <div className="z-10 border-2 border-teal-400 bg-gray-900 px-5 py-3 rounded-md">
              <a
                href="https://wa.me/5562981545545"
                className="text-teal-400 text-xl font-bold flex gap-3 "
              >
                Diga Olá
                <i className="bi bi-send">{/* sdsds */}</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="flex text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 font-bold border-b-2 border-teal-400 p-2">
        Minha redes sociais
      </h1>
      <div className="flex justify-center items-center gap-2" id="cards">
        <CardSocials icon="bi-instagram" title="Instagram" href="*" />
        <CardSocials
          icon="bi-github"
          title="Github"
          href="https://github.com/UerikSilvaCavalcante"
        />
        <CardSocials
          icon="bi-linkedin"
          title="Linkdin"
          href="https://www.linkedin.com/in/uerik-saldanha-1955292bb/?originalSubdomain=br"
        />
      </div>
    </section>
  );
}
