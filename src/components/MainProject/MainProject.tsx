import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './MainProject.scss';
type MainProjectPropTypes = {
  id: number;
  title: string;
  codeLink: string;
  liveLink: string;
  extraLink?: string;
  imagePreviews: string[];
  description1: string;
  description2: string;
  techstack: React.ElementType[];
};

const MainProject = ({
  id,
  title,
  codeLink,
  liveLink,
  extraLink,
  imagePreviews,
  description1,
  description2,
  techstack,
}: MainProjectPropTypes) => {
  return (
    <>
      <div className="main-project" id={`project${id}`}>
        <ImageCarousel images={imagePreviews}></ImageCarousel>
        <div className="project-details flex-container">
          <div>
            <h1>
              <a href={liveLink} target="_blank">
                {title}
              </a>
            </h1>
            <div className="links">
              <a href={liveLink} target="_blank" className="link">
                Live link
              </a>
              <a href={codeLink} target="_blank" className="link">
                View code
              </a>
              {extraLink ? (
                <a href={extraLink} target="_blank" className="link">
                  Next.js Version
                </a>
              ) : null}
            </div>
          </div>

          <div className="techstack">
            {techstack.map((Icon, idx) => (
              <Icon key={idx} />
            ))}
          </div>

          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>

      <hr />
    </>
  );
};

export default MainProject;
