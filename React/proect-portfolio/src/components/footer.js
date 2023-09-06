import { Flex, VStack } from "@chakra-ui/react"




const footer = () =>{
    return(
        <VStack
        backgroundColor="#18181b"
        >
            <footer>
               <Flex
               alignItems="center"
               justifyContent="center"
               color="white">
                <p>Solexgreat • © 2022</p>
               </Flex>
            </footer>
        </VStack>
    )
}

export default footer;