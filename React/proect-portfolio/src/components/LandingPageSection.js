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
        backgroundColor="#2A4365">
            <VStack>
                <Avatar src="https://i.pravatar.cc/150?img=7"/>
                <Heading>{greeting}</Heading>
                <Heading>{bio1}</Heading>
                <Heading>{bio2}</Heading>
            </VStack>

        </FullScreenSection>
    )
}

export default LandingSection;