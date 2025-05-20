import './TechStack.scss';
import {
  FaCss3Alt,
  FaSass,
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiTypescript,
  SiExpress,
  SiPostman,
  SiRender,
  SiVercel,
  SiSupabase,
  SiGithubpages,
  SiJest,
  SiVitest,
  SiPrisma,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
const TechStack = () => {
  return (
    <>
      <section className="techstack" id="techstack">
        <div className="heading">
          <h1 className="id">01</h1>
          <h1 className="name">Tech Stack</h1>
        </div>
        <div className="techstack-details">
          <div className="category">
            <div className="label">Languages</div>
            <div className="grid-container">
              <div className="icon-wrapper">
                <FaHtml5 title="HTML5" />
                <p>HTML5</p>
              </div>
              <div className="icon-wrapper">
                <FaCss3Alt title="CSS3" />
                <p>CSS3</p>
              </div>
              <div className="icon-wrapper">
                <FaSass title="Sass" />
                <p>Sass</p>
              </div>
              <div className="icon-wrapper">
                <IoLogoJavascript title="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="icon-wrapper">
                <SiTypescript title="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div className="icon-wrapper">
                <FaPython title="Python" />
                <p>Python</p>
              </div>
              <div className="icon-wrapper">
                <FaJava title="Java" />
                <p>Java</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-c-plain" title="C"></i>
                <p>C</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-azuresqldatabase-plain" title="SQL"></i>
                <p>SQL</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-r-plain"></i>
                <p>R</p>
              </div>
            </div>
          </div>
          <div className="category">
            <div className="label">Frameworks and Libraries</div>
            <div className="grid-container">
              <div className="icon-wrapper">
                <FaReact title="React" />
                <p>React</p>
              </div>
              <div className="icon-wrapper">
                <FaNodeJs title="NodeJS" />
                <p>NodeJs</p>
              </div>
              <div className="icon-wrapper">
                <SiExpress title="Express" />
                <p>Express</p>
              </div>
              <div className="icon-wrapper">
                <SiPrisma title="Prisma ORM" />
                <p>Prisma</p>
              </div>
              <div className="icon-wrapper">
                <SiJest title="Jest" />
                <p>Jest</p>
              </div>
              <div className="icon-wrapper">
                <SiVitest title="Vitest" />
                <p>Vitest</p>
              </div>
            </div>
          </div>
          <div className="category">
            <div className="label">Tools</div>
            <div className="grid-container">
              <div className="icon-wrapper">
                <FaGitAlt title="Git" />
                <p>Git</p>
              </div>
              <div className="icon-wrapper">
                <FaGithub title="GitHub" />
                <p>GitHub</p>
              </div>
              <div className="icon-wrapper">
                <VscVscode title="VSCode" />
                <p>VSCode</p>
              </div>
              <div className="icon-wrapper">
                <FaNpm title="npm" />
                <p>npm</p>
              </div>
              <div className="icon-wrapper">
                <SiPostman title="Postman" />
                <p>Postman</p>
              </div>
            </div>
          </div>
          <div className="category">
            <div className="label">Deployment and DevOps</div>
            <div className="grid-container">
              <div className="icon-wrapper">
                <SiVercel title="Vercel" />
                <p>Vercel</p>
              </div>
              <div className="icon-wrapper">
                <SiRender title="Render" />
                <p>Render</p>
              </div>
              <div className="icon-wrapper">
                <SiSupabase title="Supabase" />
                <p>Supabase</p>
              </div>
              <div className="icon-wrapper">
                <SiGithubpages title="Github pages" />
                <p>GH Pages</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
