import './App.css';
import Header from './components/Header'
import LandingSection from './components/LandingPageSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Alert from './components/Alert';
import { AlertProvider } from './context/alertContext';
import {footer} from './components/footer';
import {ChakraProvider} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header/>
          <LandingSection/>
          <ProjectsSection/>
          <ContactMeSection/>
          </Footer>
          <Alert/>
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
