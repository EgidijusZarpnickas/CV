
import './style/projektai.scss';
import plant from '../assets/plant.jpg';
import funding from '../assets/funding.jpg';
import comeing from '../assets/comeing.jpg';

export default function Projektai() {
    const projects = [
        {
            id: 1,
            title: "PlantShop",
            image: plant,
            description: "Moderni e-commerce platforma su React ir Node.js. Įgyvendinta krepšelio sistema, mokėjimų integracija ir vartotojų valdymas.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            githubLink: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "FundMe",
            image: funding,
            description: "Užduočių valdymo aplikacija su realiu laiku atnaujinimais. Vartotojai gali kurti, redaguoti ir dalintis užduotimis.",
            technologies: ["React", "Firebase", "Material-UI"],
            githubLink: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Kitas projektas",
            image: comeing ,
            description: "Kiti projektai yra daromi ir dar nėra išvydę šio pasaulio, bet visą laiką galite juos pažiureti githubo paskiroje.",
            technologies: ["JavaScript", "OpenWeather API", "CSS"],
            githubLink: "https://github.com/EgidijusZarpnickas"
        }
    ];

    return (
        <section className="projektai" id="projects">
            <div className="projektai-container">
                <h2>Mano Projektai</h2>
                
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">

                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}