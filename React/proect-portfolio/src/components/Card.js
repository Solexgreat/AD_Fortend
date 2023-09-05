import React from "react";
import { Box, Text, Image, Heading, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



const Card = ({title, description, imageSrc}) =>{

    return(
        <Box
        maxW="sm"
        backgroundColor="white"
        borderRadius="lg"
        borderWidth="2px"
        overflow="hidden"
        cursor="pointer"
        boxShadow="md">
            <Image src={imageSrc} alt={title}/>
            <VStack
            p={6}
            pb={0}
            >
                <Heading as="h4" color="black" fontWeight="semibold">
                    {title}
                </Heading>
                <Text color="gray.500"  mt={5} mb={20} fontSize={14} >
                    {description}
                </Text>
                <HStack>
                    <Text color="black" fontWeight="semibold">
                        <p> See more </p> <FontAwesomeIcon icon={faArrowRight} size="1x"  color="black"/>
                    </Text>
                </HStack>
            </VStack>
        </Box>

    )
}

export default Card;