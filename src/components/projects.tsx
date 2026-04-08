import { CardProject } from "./ui/cardProj";
import InOrbit from "../assets/Inorbit2.png";
import BuscaCep from "../assets/buscaCep.png";
import ControledeContatos from "../assets/ControledeContatos.png";
import PlayerDeAudioBook from "../assets/Playerdeaudiobook.png";
import TeiaApp from "../assets/TeiaApp.png";
import MoneyTrack from "../assets/moneitrack.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 60%",

            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".proj-reverse",
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 60%",

            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

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
            key={"InOrbit"}
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
            key={"GerenciadordeVistorias"}
            title="Gerenciador de Vistorias"
            description="Este é um projeto fullstack que desenvolvi para gerenciar vistorias de imoveis, ele e baseado em um app ja existente, que tem como publico alvo engenheiros civis."
            tags={[
              "React.js",
              "Typescipt",
              "tailwindcss",
              "dotnet",
              "PostgreSQL",
              "Next.js",
              "CSharp",
            ]}
            repository="https://github.com/UerikSilvaCavalcante/GerenciadorDeVistorias"
            reverse={true}
            href="https://gerenciador-de-vistorias.vercel.app/"
            src={TeiaApp}
          />
          <CardProject
            key={"Gerenciadordegastospessoais"}
            title="Gerenciador de gastos pessoais"
            description="O gerenciadordefinancas é uma plataforma de código aberto para gerenciamento de finanças pessoais, projetada para desenvolvedores que buscam uma solução escalável, segura e modular para rastreamento financeiro."
            tags={[
              "React.js",
              "Typescipt",
              "tailwindcss",
              "python",
              "PostgreSQL",
              "Next.js",
              "django",
              "django-ninja",
              "docker",
            ]}
            repository="https://github.com/UerikSilvaCavalcante/gerenciadorDeFinancas"
            reverse={false}
            href="https://moneitrack.netlify.app/"
            src={MoneyTrack}
          />
          <CardProject
            key={"BuscaCEP"}
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
            key={"ControledeContatos"}
          />
          <CardProject
            title="Player de AudioBook"
            description='O projeto "Audiobook Online" é uma aplicação web que permite aos usuários ouvir audiolivros de maneira simples e eficiente. Desenvolvido com React.js e Vite, este projeto oferece uma experiência de usuário suave e interativa.'
            tags={["React.js", "Vite", "Bootstrap", "API"]}
            repository="https://github.com/UerikSilvaCavalcante/PlayerDeAudioBook"
            reverse={true}
            href="https://playeraudiobook.netlify.app/"
            src={PlayerDeAudioBook}
            key={"PlayerdeAudioBook"}
          />
        </div>
      </div>
    </section>
  );
}
