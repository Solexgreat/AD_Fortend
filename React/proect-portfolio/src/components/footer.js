import { Flex, VStack } from "@chakra-ui/react"




const Footer = () =>{
    return(
        <VStack
        backgroundColor="#18181b"
        >
            <footer>
               <Flex
               alignItems="center"
               justifyContent="center"
               color="white"
               margin="0 auto"
               px={12}
               maxW="1024px"
               height={18}>
                <p>Solexgreat • © 2022</p>
               </Flex>
            </footer>
        </VStack>
    )
}

export default Footer;