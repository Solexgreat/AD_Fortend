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
            py="20vh"
            >
                <Avatar size='2xl' src="https://i.pravatar.cc/150?img=7"/>
                <Heading as='h6' size="xs" color="white"  pb="10">
                    {greeting}
                </Heading>
                <Heading as="h1" color="white" size="xl">{bio1}</Heading>
                <Heading as="h1" color="white" size="xl">{bio2}</Heading>
            </VStack>

        </FullScreenSection>
    )
}

export default LandingSection;