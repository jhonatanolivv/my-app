


import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export function Projects() {
    const projects = [
        {
            id: 1,
            title: "CritiCine",
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript Vanilla (sem frameworks)",
                "API pública de filmes (TMDb)",
            ],
            functionalities: [
                "Busca de filmes e séries por nome",
                "Listagem de resultados com imagem, título e descrição",
                "Interface básica e objetiva",
                "Estrutura de código separada (HTML/CSS/JS)"
            ],
            image: "/capa1.png",
            link: "https://project-pipocareviews.vercel.app/",
            linkGitHub: "https://github.com/jhonatanolivv/repositorio-projeto-final.git",
        },
        {
            id: 2,
            title: "MediHome",
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript Vanilla (sem frameworks)"
            ],
            functionalities: [
                "Layout responsivo",
                "Seções: Home, Sobre, Serviços, Contato",
                "Design limpo e profissional",
                "Estrutura HTML semântica",
                "Código separado em arquivos (index.html, style.css, script.js)"
            ],
            image: "/capa2.png",
            link: "https://medi-home-phi.vercel.app/",
            linkGitHub: "https://github.com/jhonatanolivv/MediHome.git",
        },

        // {
        //     id: 3,
        //     title: "Projeto 3",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     image: "/capa1.png",
        //     link: "",
        //     linkGitHub: "",
        // },
    ]

    return (
        <section className="projects" id="projects">
            <h2 className="heading">MEUS PROJETOS</h2>
            <div className="container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}