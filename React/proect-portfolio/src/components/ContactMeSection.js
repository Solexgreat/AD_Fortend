import React from "react";
import { Box, FormControl, FormLabel, Heading, Textarea, VStack, FormErrorMessage } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";



const ContactMeSection = () => {
    return (
        <FullScreenSection
        backgroundColor='purple'
        alignItems="flex-start">
            <VStack>
                <Heading>
                    Contact Me
                </Heading>
                <Box>
                    <form>
                        <VStack>
                            <FormControl>
                                    <FormLabel htmlFor="firstName">
                                        Name
                                    </FormLabel>
                                    <Input
                                    id="firstName"
                                    name="firstName" />
                                    <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                    <FormLabel htmlFor="email">
                                        Email Address
                                    </FormLabel>
                                    <Input
                                    id="email"
                                    name="email"
                                    type="email" />
                                    <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                    <FormLabel htmlFor="type">
                                        Type of enquiry
                                    </FormLabel>
                                    <Select id="type" name="type">
                                        <option value="hireMe">Freelance project proposal</option>
                                        <option value="openSource">
                                            Open source consultancy session
                                        </option>
                                        <option value="other">Other</option>
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="comment">
                                    Your message
                                </FormLabel>
                                <Textarea
                                id="comment"
                                name="comment"
                                height={250}/>
                            </FormControl>
                        </VStack>
                    </form>
                </Box>    
            </VStack>

        </FullScreenSection>
    )
}

export default ContactMeSection;