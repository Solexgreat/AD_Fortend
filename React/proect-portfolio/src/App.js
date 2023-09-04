import './App.css';
import Header from './components/Header'
import LandingSection from './components/LandingPageSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Alert from './components/Alert';
import {ChakraProvider} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <main>
      <Header/>
      <LandingSection/>
      <ProjectsSection/>
      <ContactMeSection/>
      <Alert/>
    </main>
    </ChakraProvider>
  );
}

export default App;
