import {Box, HStack, ChakraProvider} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,

} from "@fortawesome/free-brands-svg-icons";
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
              <HStack spacing={5}>
                <a href={socials[0].url }>
                  <FontAwesomeIcon icon={socials[0].icon} size="2x" />
                </a>
                <a href={socials[1].url}>
                  <FontAwesomeIcon icon={socials[1].icon}  size="2x"/>
                </a>
                <a href={socials[2].url}>
                  <FontAwesomeIcon icon={socials[2].icon} size="2x"/>
                </a>
                <a href={socials[3].url}>
                  <FontAwesomeIcon icon={socials[3].icon} size="2x"/>
                </a> 
                <a href={socials[4].url}>
                  <FontAwesomeIcon icon={socials[4].icon} size="2x"/>
                </a>  
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