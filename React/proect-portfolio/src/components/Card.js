import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
//import Card from './../../../customizing-example/src/card';



const Card = ({title, description, imageSrc}) =>{

    return(
        <Box>
            <Image src={imageSrc} alt={title}/>
            <Box
            boxsize="sm">
                <Text>
                    {title}
                </Text>
                <Text>
                    {description}
                </Text>
            </Box>
        </Box>
    )
}

export default Card;