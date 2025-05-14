

import "./ProjectCard.css"

export function ProjectCard({ project }) {
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
                <div className="description">
                    <h4>🛠️ Tecnologias utilizadas:</h4>
                    <ul>
                        {(project.technologies || []).map((tech, index) => (
                            <li key={index}>• {tech}</li>
                        ))}
                    </ul>

                    <h4>💡 Funcionalidades:</h4>
                    <ul>
                        {(project.functionalities || []).map((func, index) => (
                            <li key={index}>• {func}</li>
                        ))}
                    </ul>
                </div>


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