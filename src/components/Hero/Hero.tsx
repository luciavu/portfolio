import Nav from '../Nav/Nav';
import './Hero.scss';

const Hero = () => {
  return (
    <>
      <div className="hero-section flex-container">
        <div className="hero-content flex-container">
          <div className="name-wrapper">
            <div className="firstname">lucia</div>

            <div className="lastname">vu</div>
          </div>
          <div className="nav-wrapper">
            <Nav
              links={[
                { number: '01', name: 'About', link: '#about' },
                { number: '02', name: 'Tech stack', link: '#techstack' },
                { number: '03', name: 'Projects', link: '#projects' },
                { number: '04', name: 'Contact', link: '#contact' },
              ]}
            ></Nav>
          </div>
        </div>

        <img src="images/main2.jpg" alt="hero image" />
      </div>
    </>
  );
};
export default Hero;
