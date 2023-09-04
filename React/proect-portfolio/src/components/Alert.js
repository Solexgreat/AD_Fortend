import { useRef } from "react";
import { useAlertContext } from "../context/alertContext";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";



function Alert(){
    const {isOpen, type, message, onClose} = useAlertContext();
    const cancelRef = useRef();

    return (
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
            <AlertDialogOverlay>
                <AlertDialogContent backgroundColor={ type === "success" ? '#81C784' : '#FF8A65'}>
                    <AlertDialogHeader fontSize='lg' fontWeight='semibold'>
                        {type === "success" ? "All good": "Oops!"}
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        {message}
                    </AlertDialogBody>
                </AlertDialogContent>
            </AlertDialogOverlay>

        </AlertDialog>
    )
}

export default Alert;