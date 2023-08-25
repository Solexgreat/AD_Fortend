import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Solomon a.k.a Solex_great!";
const bio1 = "A Fullstack developer";
const bio2 = "specialised in React";



const LandingSection =() => {
    return(
        <FullScreenSection
        justifycontent="center"
        alignItems="center"
        backgroundColor="#2A4365">
            <VStack
            py="20vh">
                <Avatar  src="https://i.pravatar.cc/150?img=7"/>
                <Heading as="h1" size="md" color="white" >
                    {greeting}
                </Heading>
                <Heading as='h1' size='4xl'>{bio1}</Heading>
                <Heading>{bio2}</Heading>
            </VStack>

        </FullScreenSection>
    )
}

export default LandingSection;