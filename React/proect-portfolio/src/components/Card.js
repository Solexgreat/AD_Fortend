import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
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
        boxShadow="md">
            <Image src={imageSrc} alt={title}/>
            <Box
            p={6}
            pb={0}
            >
                <Heading color="black" fontWeight="semibold">
                    {title}
                </Heading>
                <Text color="gray.500"  mt={5} mb={20} fontSize={14} >
                    {description}
                </Text>
                <Text color="black" fontWeight="semibold">
                    See more <FontAwesomeIcon icon={faArrowRight} size="1x"  color="black"/>
                </Text>

            </Box>
        </Box>

    )
}

export default Card;