import './App.css';
import Header from './components/Header'
import LandingSection from './components/LandingPageSection';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <main>
      <Header/>
      <LandingSection/>
    </main>
    </ChakraProvider>
  );
}

export default App;
