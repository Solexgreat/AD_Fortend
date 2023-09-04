import { useState, createContext, useContext } from "react";

const AlertContext = createContext(undefined);

export const AlertProvide = ({ children }) =>{
    const [state, setState] = useState({
        isOpen: false,
        type: "success",
        message:''
    })

    return(
        <AlertContext.Provider
            value={{
                ...state,
                onOpen: (type, message) => {setState({isOpen: true, type, message})},
                onClose: () => setState({isOpen: true, type: " ", message: " ",})
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export const useAlertContext = () => useContext(AlertContext);
