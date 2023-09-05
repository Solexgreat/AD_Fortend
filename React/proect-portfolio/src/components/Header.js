import {Box, HStack, ChakraProvider} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,

} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
//import theme from "./theme";



const socials =[
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
]

function Header() {
  const handleclick = (achor) =>{
    const id = `${achor}-section`;
    const element = document.getElementById(id)
    if (element){
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const scrollRef = useRef(null);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;
    const handleScroll = () =>{
      const currentScrollPostion = window.scrollY;
      const scrollDirection = scrollRef.current;
      if (!scrollDirection){
        return;
      }
      if (currentScrollPostion > lastScrollPosition){
        scrollDirection.current = 'down';
      } else {
        scrollDirection.current = 'up';
      }
      lastScrollPosition = currentScrollPostion;
    }
    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },
  []
  );

  return(
    <ChakraProvider >
      <Box 
      pos="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      transform={scrollRef.current === 'down' ? 'translateY(-200px)' : 'translateY(0)'}
      backgroundColor="#18181b" 
      >
        <Box color='white' maxW="1280px" m="0 auto">
          <HStack
          spacing="16px"
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          >
            <nav>
              <HStack spacing={8}>
                {socials.map(({icon, url}) =>
                <a
                key ={url}
                href={url}
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} size="2x" key={url}/>
                </a>
                )}
              </HStack>
            </nav>
            <nav>
              <HStack spacing={10}>
                <a href='/ContactMeSection' onClick={handleclick('contactme')}>Contact Me</a>
                <a href="/ProjectsSection" onClick={handleclick('projects')}>Projects</a>

              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Header;
