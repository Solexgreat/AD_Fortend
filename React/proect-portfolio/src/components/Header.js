import {Box, HStack, ChakraProvider} from "@chakra-ui/react";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
//import theme from "./theme";

function Header() {

  const socials =[
    {
      icon: faGithub,
      url: "https://github.com",
    }
  ]
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
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
            >
              <nav>
                {socials[0]}
              </nav>
              sbshbhscbsd
            </HStack>
          </Box>
        </Box>
      </ChakraProvider>
    );
}

export default Header;