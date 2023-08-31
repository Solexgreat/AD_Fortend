import { useState, createContext, useContext } from "react";

const AlertContext = createContext(undefined);

const AlertProvide = () =>{
    const [state, setState] = useState({
        isOpen: false,
        type: "success",
        message:''
    })

    return(
        <AlertContext.Provider
        value={{
            ...state,
            onOpen: (type, message) => {setState({isOpen: true, type, message})}
            onClose
        }} ></AlertContext.Provider>
    )
}