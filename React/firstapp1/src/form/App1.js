import { useState } from "react";
import { validateEmail } from "./utils";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
});
    const [role, setRole] = useState("role");

    return

}