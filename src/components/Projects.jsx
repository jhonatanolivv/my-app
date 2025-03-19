


import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export function Projects() {
    const projects = [
        {
            id: 1,
            title: "CritiCine",
            description: "Descrição do projeto 1",
            image: "/capa1.png",
            link: "https://project-pipocareviews.vercel.app/",
            linkGitHub: "https://github.com/jhonatanolivv/repositorio-projeto-final.git",
        },
        {
            id: 2,
            title: "Projeto 2",
            description: "Descrição do projeto 2",
            image: "/capa1.png",
            link: "",
            linkGitHub: "",

            },
            {
            id: 3,
            title: "Projeto 3",
            description: "Descrição do projeto 3",
            image: "/capa1.png",
            link: "",
            linkGitHub: "",
            },
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