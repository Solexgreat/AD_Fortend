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

    const getIsFormValid = () => {
        return(firstName &&
            validateEmail(email) && 
            password.value.lenght >= 8 &&
            role !== "role")
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
    }

    return (
        <div className="App">
            <form>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>First Name <sup>*</sup> </label>
                        <input value={firstName}
                        onChange={e => setFirstName(e.target.value)} 
                        placeholder="firstname"/>
                    </div>
                    <div className="Field">
                        <label>Last Name <sup>*</sup> </label>
                        <input value={lastname}
                        onChange=
                        {e => setLastName(e.target.value)}
                        placeholder="lastname"/>
                    </div>
                    <div className="Field">
                        <label>
                            Email <sup>*</sup>
                        </label>
                        <input value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="email"/>
                    </div>
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input  value={password.value} 
                        onChange= {e => 
                        {setPassword({...password, value:e.target.value});}}
                        onBlur={ setPassword({...password, isTouched:True})}
                        placeholder="password"/>
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select value={role} 
                        onChange={ e => setRole(e.target.value)}> 
                            <option value="role"> Role </option>
                            <option value="individuals">Individuals</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    
                </fieldset>
            </form>
        </div>
    )

}