import { useEffect } from "react";
import { Box, FormControl, FormLabel, Heading, 
    Textarea, VStack, FormErrorMessage,
     Input, Select, Button} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FullScreenSection from "./FullScreenSection";
import useSubmit from '../hook/useSubmit';



const ContactMeSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        intialValues: {
            firstName: '',
            email:'',
            type: 'hireMe',
            comment: '',
        },
        onSubmit: (values) => { submit("",values) },
    
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string().required("Required").email("Invalid email address"),
            type: Yup.string().optional(),
            comment: Yup.string().min(25, "Must be at least 25 characters").required("Required")
    })
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if(response.type === "success"){
                formik.resetForm();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    return (
        <FullScreenSection
        isDarkBackground
        backgroundColor="#512DA8"
        py={16}
        spacing={8}>
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading>
                    Contact Me
                </Heading>
                <Box w="100%" rounded="md" p={6}>
                <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                    <FormLabel htmlFor="firstName">
                                        firstName
                                    </FormLabel>
                                    <Input
                                    id="firstName"
                                    name="firstName"
                                    // value={formik.values.firstName}
                                    // onChange={formik.handleChange()}
                                    {...formik.getFieldProps("firstName")} />
                                    <FormErrorMessage>
                                        {formik.errors.firstName && formik.touched.firstName}
                                    </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                    <FormLabel htmlFor="email">
                                        Email Address
                                    </FormLabel>
                                    <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    // value={formik.values.email}
                                    // onChange={formik.handleChange}
                                    {...formik.getFieldProps("email")}
                                     />
                                    <FormErrorMessage>
                                        {formik.errors.email && formik.touched.email}
                                    </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                    <FormLabel htmlFor="type">
                                        Type of enquiry
                                    </FormLabel>
                                    <Select id="type" 
                                            name="type"
                                            {...formik.getFieldProps("type")}>
                                        <option value="hireMe">Freelance project proposal</option>
                                        <option value="openSource">
                                            Open source consultancy session
                                        </option>
                                        <option value="other">Other</option>
                                    </Select>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                                <FormLabel htmlFor="comment">
                                    Your message
                                </FormLabel>
                                <Textarea
                                {...formik.getFieldProps("comment")}
                                id="comment"
                                name="comment"
                                height={250}
                                // value={formik.values.comment}
                                />
                                <FormErrorMessage>
                                    {formik.errors.comment && formik.touched.comment}
                                </FormErrorMessage>
                            </FormControl>
                            <Button
                            type="submit"
                            colorScheme="purple"
                            width="full"
                            isLoading={isLoading}
                            loadingText='Submitting'
                            >
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>    
            </VStack>

        </FullScreenSection>
    )
}

export default ContactMeSection;