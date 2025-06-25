import './TechStack.scss';
import { SiRender, SiGithubpages } from 'react-icons/si';
import stack from './stack';

const TechStack = () => {
  return (
    <>
      <section className="techstack" id="techstack">
        <div className="heading">
          <h1 className="id">02</h1>
          <h1 className="name">Tech Stack</h1>
        </div>
        <div className="techstack-details">
          {Object.entries(stack).map(([category, items]) => (
            <div className="category" key={category}>
              <div className="label">{category.toString()}</div>
              <div className="grid-container">
                {Object.values(items).map((item, index) => (
                  <div className="icon-wrapper" key={index}>
                    {item.image === 'custom-component' ? (
                      item.name === 'Render' ? (
                        <SiRender />
                      ) : (
                        <SiGithubpages />
                      )
                    ) : (
                      <img src={item.image} />
                    )}
                    <p style={item.name.length > 10 ? { fontSize: '0.8rem' } : {}}>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStack;
