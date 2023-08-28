import './App.css';
import Header from './components/Header'
import LandingSection from './components/LandingPageSection';
import ProjectsSection from './components/ProjectsSection'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <main>
      <Header/>
      <LandingSection/>
      <ProjectsSection/>
    </main>
    </ChakraProvider>
  );
}

export default App;
