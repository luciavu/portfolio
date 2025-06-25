import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects.tsx';
import Contact from './components/Contact/Contact';
import './App.scss';
import About from './components/About/About.tsx';

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <TechStack></TechStack>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
