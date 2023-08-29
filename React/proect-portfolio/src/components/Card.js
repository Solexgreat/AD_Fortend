import React from "react";
//import Card from './../../../customizing-example/src/card';



const Card = ({title, description, imageSrc}) =>{

    return(
        <Box>
            <img src={imageSrc} alt={title}/>
            <Box>
                <Text>{title}</Text>
                <p>{description}</p>
            </Box>
        </Box>
    )
}