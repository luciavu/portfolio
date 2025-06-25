import './About.scss';
const About = () => {
  return (
    <section id="about" className="About">
      <div className="heading">
        <h1 className="id">01</h1>
        <h1 className="name">About</h1>
      </div>

      <div className="about-wrapper">
        <div className="about-text">
          <h2>Nice to meet you, I'm Lucia!</h2>

          <p>
            <strong>About me: </strong>
            I'm an undergraduate student at <b>The University of Queensland </b>working towards my
            <b> Bachelors in Computer Science with a Data Science Major</b>. Alongside my studies,
            I've been actively involved in the
            <b>
              <a
                style={{
                  margin: '0 0.5rem',
                  color: 'var(--color-point-dark)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.2rem',
                }}
                href="https://www.theodinproject.com/about"
                target="_blank"
              >
                Odin Project
              </a>
            </b>
            and have been building full-stack web applications for <b>1+ years</b>. I enjoy building
            fun solutions to every-day problems.
          </p>

          <p>
            <strong>My plans:</strong>to learn/develop desktop apps, mobile apps, and games.
          </p>

          <p>
            <strong>I'm currently working on:</strong> a Chrome extension called <b>DashStart</b>,
            and learning React Native + Expo.
          </p>
          <p>
            <strong>My interests: </strong> coding, drawing, and looking at objects in the night sky
            through my telescope.
          </p>
        </div>

        <div className="about-images">
          <figure>
            <img src="/images/about/wip.png" alt="WIP Project" />
            <figcaption>
              <strong>Current Project - </strong>Dashboard Chrome extension
            </figcaption>
          </figure>
          <figure>
            <img src="/images/about/telescope.jpeg" alt="Photo from telescope 1" />
            <figcaption>
              <strong>Recent telescope photos - </strong>The Moon (150x)
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
