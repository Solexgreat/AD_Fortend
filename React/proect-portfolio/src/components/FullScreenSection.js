import * as React from 'react';
import { VStack } from '@chakra-ui/react';

const FullScreenSection = ({children, isDarkBackground, ...props}) =>{
    return(
        <VStack
        backgroundColor={...props.backgroundColor}
        color={isDarkBackground ? 'white' : 'black'}>
            <VStack maxW="1280" minH="100vh">
                {children}
            </VStack>
        </VStack>
    )
}

 export default FullScreenSection;