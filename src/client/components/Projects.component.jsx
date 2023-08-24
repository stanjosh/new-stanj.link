import projects from "./db/projects.json";

const Projects = () => {
  return (
    <div className="project-content">
      {projects.sort(() => .5 - Math.random()).map((item, key) => (
        
        <a href={item.url} target="_blank" rel="noreferrer" key={key} className="project" >
        
          
        <div style={{ backgroundImage: `url(${item.image})` }}>
          <h3 data-title={item.name} />  
          <p data-desc={item.description} />
        </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
