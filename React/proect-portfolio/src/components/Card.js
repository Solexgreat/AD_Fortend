import React from "react";
import { Box, Text, Image, Link } from "@chakra-ui/react";
//import Card from './../../../customizing-example/src/card';



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
            >
                <Text color="black" fontWeight="semibold">
                    {title}
                </Text>
                <Text color="gray.500"  mt={5} fontSize={14} >
                    {description}
                </Text>
                <Link color="black" fontWeight="semibold" mt={5}>
                    See More ->>
                </Link>
            </Box>
        </Box>

    )
}

export default Card;