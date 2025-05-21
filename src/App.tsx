import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects.tsx';
import Contact from './components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <>
      <Hero></Hero>
      <TechStack></TechStack>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
