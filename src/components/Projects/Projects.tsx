import { FaCss3Alt, FaSass, FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiRender, SiVercel, SiSupabase, SiPrisma } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import ProjectGrid from '../ProjectGrid/ProjectGrid';
import MainProject from '../MainProject/MainProject';
import projects from './projects';

const Projects = () => {
  const mainProjectsPath = './images/project';

  return (
    <>
      <section className="projects" id="projects">
        <div className="heading">
          <h1 className="id">02</h1>
          <h1 className="name">Projects</h1>
        </div>
        <MainProject
          id={1}
          title="Fullstack Blog App"
          liveLink="https://blog-one-swart-70.vercel.app/"
          codeLink="https://github.com/luciavu/blog"
          imagePreviews={[
            `${mainProjectsPath}1/preview1.jpg`,
            `${mainProjectsPath}1/preview2.jpg`,
            `${mainProjectsPath}1/preview3.jpg`,
          ]}
          description1="A full-stack (React + Node.js) blog application that consumes a custom-built RESTful API backend and deployed via Vercel."
          description2="Fetches and displays blog posts from RESTful API server deployed on Render and PostgreSQL database on Supabase.  Includes  JWT-Protected routes for admin login, CRUD operations for blog posts
and managing user comments/permissions"
          techstack={[
            FaReact,
            SiTypescript,
            FaNodeJs,
            FaSass,
            BiLogoPostgresql,
            SiPrisma,
            SiVercel,
            SiRender,
            SiSupabase,
          ]}
        ></MainProject>
        <MainProject
          id={2}
          title="File Storage App"
          liveLink="https://file-uploader-5jrp.onrender.com"
          codeLink="https://github.com/luciavu/file-uploader"
          imagePreviews={[`${mainProjectsPath}2/preview1.jpg`, `${mainProjectsPath}2/preview2.jpg`]}
          description1="A personal file storage app inspired by Google Drive."
          description2="This application uses TypeScript, Express, PostgreSQL, Passport.js, Prisma ORM, multer, Supabase Cloud Storage, EJS, and bcyrptjs, and is deployed via Render and Supabase.
       It involves user login authentication and allows CRUD operations on files are stored in Supabase buckets"
          techstack={[
            SiTypescript,
            FaNodeJs,
            FaSass,
            BiLogoPostgresql,
            SiPrisma,
            SiVercel,
            SiSupabase,
          ]}
        ></MainProject>
        <MainProject
          id={3}
          title="Weather App"
          liveLink="https://luciavu.github.io/weather-app/"
          codeLink="https://github.com/luciavu/weather-app"
          imagePreviews={[
            `${mainProjectsPath}3/preview1.jpg`,
            `${mainProjectsPath}3/preview2.jpg`,
            `${mainProjectsPath}3/preview3.jpg`,
          ]}
          description1="A Weather Forecast website built using HTML, CSS, and JavaScript."
          description2="The app fetches weather data from the Visual Crossing Weather API to provide real-time weather  forecasts for a specific location, offering both current weather data, hourly forecast, and 10-day forecast. It also offers geolocation input and toggling temperature between celsius and farenheit."
          techstack={[FaHtml5, FaCss3Alt, IoLogoJavascript]}
        ></MainProject>
        <MainProject
          id={4}
          title="Online Shop"
          liveLink="https://shopping-cart-beta-mauve.vercel.app"
          codeLink="https://github.com/luciavu/shopping-cart"
          imagePreviews={[
            `${mainProjectsPath}4/preview1.jpg`,
            `${mainProjectsPath}4/preview2.jpg`,
            `${mainProjectsPath}4/preview3.jpg`,
          ]}
          description1="A mock shopping cart built with React Router and the Context API."
          description2="Features products from the FakeStore API, and was tested with Vitest and deployed on Vercel."
          techstack={[FaHtml5, FaCss3Alt, IoLogoJavascript, SiVercel]}
        ></MainProject>
        <MainProject
          id={5}
          title="Battleship"
          liveLink="https://luciavu.github.io/battleship/"
          codeLink="https://github.com/luciavu/battleship"
          imagePreviews={[
            `${mainProjectsPath}5/preview1.jpg`,
            `${mainProjectsPath}5/preview2.jpg`,
            `${mainProjectsPath}5/preview3.jpg`,
            `${mainProjectsPath}5/preview4.jpg`,
          ]}
          description1="A Battleship game built using HTML, CSS, and JavaScript."
          description2="The project follows Test-Driven Development (TDD) principles and uses Jest for unit testing."
          techstack={[FaHtml5, FaCss3Alt, IoLogoJavascript]}
        ></MainProject>
      </section>
      <section id="github">
        <div className="heading">
          <h1 className="id">03</h1>
          <h1 className="name">More Projects</h1>
        </div>
        <p>
          Available on my{' '}
          <a href="https://github.com/luciavu" target="_blank" className="link">
            GitHub
          </a>
        </p>
        <ProjectGrid projects={projects}></ProjectGrid>
      </section>
    </>
  );
};

export default Projects;
