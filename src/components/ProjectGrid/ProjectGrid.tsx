import './ProjectGrid.scss';

type Project = {
  title: string;
  imagePath: string;
  link: string;
};

type ProjectGridPropTypes = {
  projects: Project[];
};
const ProjectGrid = ({ projects }: ProjectGridPropTypes) => {
  return (
    <div className="project-grid">
      {projects.map((project, idx) => (
        <a href={project.link} key={idx} target="_blank">
          <img src={project.imagePath} alt="Project preview" title={project.title} />
        </a>
      ))}
    </div>
  );
};

export default ProjectGrid;
