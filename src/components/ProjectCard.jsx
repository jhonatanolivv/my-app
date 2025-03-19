

import "./ProjectCard.css"

export function ProjectCard( { project } ) {
    if (!project) {
        project = {
            title: "Projeto sem título",
            description: "Descrição não disponível",
            image: "/capa1.png",
            link: "",
            linkGitHub: "",
        }
    }

    return (
        <div className="card">
            <div className="imageContainer">
                <img src={project.image || "/capa1.png"} alt={project.title} className="image" />
            </div>
            <div className="contentCard">
                <h3 className="title">{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link">
                    Ver projeto
                </a>
                <a href={project.linkGitHub} target="_blank" rel="noopener noreferrer" className="link">
                    GitHub
                </a>
                </div>
            </div>
        </div>
    )
}