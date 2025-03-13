import { CardProject } from "./ui/cardProj";
import InOrbit from "../assets/Inorbit2.png";
import BuscaCep from "../assets/buscaCep.png";
import ControledeContatos from "../assets/ControledeContatos.png";
import PlayerDeAudioBook from "../assets/Playerdeaudiobook.png";
import Quiz from "../assets/Quiz.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top +=500",
        end: "bottom center",
        toggleActions: "restart pause reverse pause",
        // pin: true,
        scrub: 1,
        // markers: true,
      },
    });
    tl.add([
      gsap.fromTo(
        ".proj",
        {
          opacity: 0,
          x: -300,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.5,
        }
      ),
      gsap.fromTo(
        ".proj-reverse",
        {
          opacity: 0,
          x: 300,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.5,
        }
      ),
    ]);
  });

  return (
    <section
      className="w-full h-full  bg-gray-900 flex flex-col items-center justify-center gap-8 p-1"
      id="projects"
    >
      <h1 className="text-center w-full p-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-teal-400 font-bold">
        Meus Projetos
      </h1>
      <div className="w-full p-4 flex flex-col flex-wrap items-center justify-center gap-7 ">
        <div className="w-full h-full flex flex-col gap-10">
          <CardProject
            title="InOrbit"
            description="O principal objetivo deste projeto é oferecer uma ferramenta simples e eficiente para os usuários gerenciarem suas metas e acompanharem o progresso de forma organizada."
            tags={[
              "React.js",
              "Typescipt",
              "tailwindcss",
              "drizzle",
              "PostgreSQL",
            ]}
            repository="https://github.com/UerikSilvaCavalcante/inOrbit"
            reverse={false}
            href="https://in-orbit-gold.vercel.app/"
            src={InOrbit}
          />
          <CardProject
            title="Busca CEP"
            description='O projeto "Consulta de Endereço por CEP" é uma aplicação web que permite aos usuários buscar informações detalhadas de endereço usando um CEP.'
            tags={["HTML", "CSS", "Javascript", "API", "Bootstrap"]}
            repository="https://github.com/UerikSilvaCavalcante/Pega_CEP"
            reverse={true}
            href="https://buscaendereco.netlify.app/"
            src={BuscaCep}
          />
        </div>
        <div className="w-full h-full flex flex-col gap-10 mt-16 ">
          <CardProject
            title="Controle de Contatos"
            description='O sistema "Controle de Contatos" é uma aplicação web desenvolvida em C# com o framework ASP.NET MVC. Seu objetivo principal é gerenciar contatos de forma eficiente e segura, utilizando PostgreSQL para armazenamento e manipulação dos dados.'
            tags={["C#", "ASP.NET core", "Bootstrap", "PostgreSQL"]}
            repository="https://github.com/UerikSilvaCavalcante/ControledeContatos"
            reverse={false}
            href="https://controledecontatos.onrender.com"
            src={ControledeContatos}
          />
          <CardProject
            title="Player de AudioBook"
            description='O projeto "Audiobook Online" é uma aplicação web que permite aos usuários ouvir audiolivros de maneira simples e eficiente. Desenvolvido com React.js e Vite, este projeto oferece uma experiência de usuário suave e interativa.'
            tags={["React.js", "Vite", "Bootstrap", "API"]}
            repository="https://github.com/UerikSilvaCavalcante/PlayerDeAudioBook"
            reverse={true}
            href="https://playeraudiobook.netlify.app/"
            src={PlayerDeAudioBook}
          />
          <CardProject
            title="Quiz"
            description='O projeto "Quiz Interativo" é uma aplicação web que oferece uma experiência de quiz divertida e desafiadora.'
            tags={["HTML", "CSS", "Javascript"]}
            repository="https://github.com/UerikSilvaCavalcante/Quiz"
            reverse={false}
            href="https://ueriksilvacavalcante.github.io/Quiz/"
            src={Quiz}
          />
        </div>
      </div>
    </section>
  );
}
