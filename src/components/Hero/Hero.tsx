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
          <Nav
            links={[
              { number: '01', name: 'Tech stack', link: '#techstack' },
              { number: '02', name: 'Projects', link: '#projects' },
              { number: '03', name: 'GitHub', link: '#github' },
              { number: '04', name: 'Contact', link: '#contact' },
            ]}
          ></Nav>
        </div>
      </div>
    </>
  );
};
export default Hero;
