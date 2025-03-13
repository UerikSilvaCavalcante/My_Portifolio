import { Card } from "./ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top +=500",
        end: "+=500",
        toggleActions: "restart pause reverse pause",
        // pin: true,
        scrub: 1,
        
      },
    });
    tl.add([
      gsap.fromTo(
        ".cardAbout",
        {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          //   ease: "power3.out",
        }
      ),
      gsap.fromTo(
        ".about",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.5,
          //   ease: "power3.out",
        }
      ),
    ]);
  }, []);
  return (
    <section
      className="w-full h-full  bg-gray-900 flex flex-col items-center justify-center gap-8 px-8"
      id="about"
    >
      <div className="flex flex-col   items-center justify-center gap-10 ">
        <div className="flex flex-col h-full gap-6 lg:flex-row w-full justify-between items-center">
          <Card
            title="Minha História"
            description="Meu nome é Uerik, tenho 18 anos e sou estudante de programação. Atualmente estou estudando back-end com C# e Python, e front-end com React. Estou sempre em busca de novos desafios e oportunidades. Meu objetivo é me tornar um desenvolvedor full-stack."
            style=" h-full "
          />
          <Card
            title="Meu Hobby"
            description="Meu hobby é programar e estudar novas tecnologias. Gosto de passar meu tempo livre programando e estudando novas tecnologias. Além disso, gosto de jogar videogames e assistir séries, filmes e animes."
            style="h-full grow"
          />
        </div>
        <Card
          title="Minha Educação"
          description="Estou cursando Engenharia Mecatrônica e estou no segundo período. Estudo programação há 2 anos e tenho conhecimento principalmente em C#, Python e outros com TypeScript. Além disso, tenho conhecimento em vários frameworks como .NET Core e Flask, bem como conhecimento em bancos de dados com PostgreSQL. Estou sempre em busca de novos conhecimentos e desafios."
        />
      </div>
    </section>
  );
}
