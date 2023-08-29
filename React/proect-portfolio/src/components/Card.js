import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
//import Card from './../../../customizing-example/src/card';



const Card = ({title, description, imageSrc}) =>{

    return(
        <Box
        boxSize="sm">
            <Image src={imageSrc} alt={title}/>
            <Box
            p={6}
            backgroundColor="white"
            borderRadius={8}>
                <Text color="black" fontWeight="semibold">
                    {title}
                </Text>
                <Text color="black" fontWeight="semibold">
                    {description}
                </Text>
            </Box>
        </Box>

    )
}

export default Card;