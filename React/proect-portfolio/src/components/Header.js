import {Box, HStack, ChakraProvider} from "@chakra-ui/react";
//import theme from "./theme";

function Header() {
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
          <Box color='blue' maxW="1280px" m="0 auto">
            <HStack
            px={16}
            py={4}
            >
              sbshbhscbsd
            </HStack>
          </Box>
        </Box>
      </ChakraProvider>
    );
}

export default Header;