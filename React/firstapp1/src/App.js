// /**import logo from './logo.svg';*/
// import * as React from 'react';
// //import {Switch} from '../switch';
// import './App.css';
// import './index.css';
// import {cloneElement, useState} from 'react';
// //import { RadioOption } from './React_children_cloning/Radio';
// /**import {useState} from "react"*
// import { useContext } from 'react';
// import { React } from 'react';

// **REGISTRATION Form***
// const PasswordErrorMessage = () => {
//   return (
//     <p className="FieldError">Password should have at least 8 characters</p>
//   );
// };

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [role, setRole] = useState("role");

//   const getIsFormValid = () => {
//     // Implement this function
//     return (firstName &&
//       validateEmail(email) &&
//       password.value.length > 8 &&
//       role != 'role')
//   };

//   const clearForm = () => {
//     // Implement this function
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword({value: "",
//       isTouched: false
//     })
//     setRole('role')
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Account created!");
//     clearForm();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Sign Up</h2>
//           <div className="Field">
//             <label>
//               First name <sup>*</sup>
//             </label>
//             <input placeholder="First name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}/>
//           </div>
//           <div className="Field">
//             <label>Last name</label>
//             <input placeholder="Last name"
//               value={lastName}
//               onChange={e => {
//                 setLastName(e.target.value)
//               }} />
//           </div>
//           <div className="Field">
//             <label>
//               Email address <sup>*</sup>
//             </label>
//             <input placeholder="Email address"
//               value={email} onChange={e =>
//               { setEmail(e.target.value) }} />
//           </div>
//           <div className="Field">
//             <label>
//               Password <sup>*</sup>
//             </label>
//             <input placeholder="Password"
//               type="password"
//               value={password.value}
//               onChange={e => {
//                 setPassword({...password, value:e.target.value });
//               }}
//               onBlur={() => {
//                 setPassword({ ...password, isTouched: true });
//               }} />
//             {password.isTouched & password < 8 ?
//               (<PasswordErrorMessage />): null}
//           </div>
//           <div className="Field">
//             <label>
//               Role <sup>*</sup>
//             </label>
//             <select>
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//           </div>
//           <button type="submit" disabled={!getIsFormValid()}>
//             Create account
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }*/

// //CONTROL FORM Comment

// /**function App() {
//   const [score, setScore] = useState("10")
//   const [comment, setComment] = useState("")

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     if (Number(score) <= 5 &&  comment.length < 10) {
//       alert("Please provide a comment explaining why the experience was poor.")
//       return;
//     }

//     console.log("form submitted!")
//     setScore("10");
//     setComment("");

//   }
//   return (
//     <div className="feedback">
//       <form onSubmit={handelSubmit}>
//         <fieldset>
//         <h1>Feedback form</h1>
//         <div className="Field">
//           <label>Score:  {score}  </label><br/>
//           <input type="range" 
//           min="0" 
//           max="10"
//           value={score}
//           onChange={e => setScore(e.target.value)}/>
//         </div>
//         <div className='Field'>
//           <label>Comment: </label><br/>
//           <textarea value={comment} onChange={e => setComment(e.target.value)}/>
//         </div>
//         <button type='submit' className='field_btn'>Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   )
// }*/

// //**ToDo */
// /**const ToDo = props => {
//     <tr>
//         <td>
//             <label>{props.id}</label>
//         </td>
//         <input/>
//         <td>
//             <label>{props.createdAt}</label>
//         </td>
//     </tr>
// };

// function App() {
//     const {todos, setTodos} = useState([{
//         id: 'todo1',
//         createdAt: '18:00'
//     }, {
//         id: 'todo2',
//         createdAt: '20:30'

//     }])

//     const reverseOrder = () => {
//         // Reverse is a mutative operation so we need to creat a new array first 
//         setTodos([...todos].reverse());
//     }

//     return (
//         <div>
//             <button onClick={reverseOrder}>Reverse</button>
//             <table>
//                 <tbody>
//                     {todos.map((todo, index) => (
//                     <ToDo key={index} id={todo.id} createdAt={todo.createdAt}/>))}
//                 </tbody>
//             </table>
//         </div>        
//     );
// } 


// /**function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="A pp-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }*/

// //Toggle ON and OFF

// /*const ToggleContext = React.createContext();


// function Toggle(props) {
//   const[on, setOn] = React.useState(false);
//   const toggle = React.useCallback(() => setOn(on=> !on), []);
//   React.useEffect(()=> {props.onToggle(on)}, [on]);

//   const value = React.useMemo(() => {on, toggle}, [on])

//   return(
//     <ToggleContext.Provider value={value}>{children}
//     </ToggleContext.Provider>
//   )
//   }
// function useToggleContext (){
//   const context = React.useContext(ToggleContext)
//   if (!context){
//     throw new Error (
//       `Toggle compound components cannot be rendered outside the Toggle component`
//     )
//   }
//   return context
// }

// function ToggleOn({children}) {
//   const {on} = useToggleContext();
//   return on ? children : null 
// }

// function ToggleOff({children}) {
//   const {on} = useToggleContext();
//   return on ? null : children;
// }

// function ToggleButton(props) {
//   const {on, toggle} = useToggleContext();
//   return(
//     <switch on={on} onClick={toggle} {...props}/>
//   )
// }

// function App() {
//   return (
//     <Toggle onToggle={on=> console.log(on)}>
//       <ToggleOn>The button is on</ToggleOn>
//       <ToggleOff>The button is off</ToggleOff>
//       <ToggleButton />
//     </Toggle>
//   )
// }*/


// /**const Feedback = () => {
//   const [score, setScore] = React.useState(10);
//   const [comment, setComment ]  = React.useState("")

//   const isDisabled = score < 5 && comment.length <= 10;
//   const textAreaPlaceholder = isDisabled ? "Please comment why the service is Bad!" : "optional comment"

//   const handleScore = (e) => {
//     setScore(e.target.value);
//   }

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     if(score < 5 && comment.length <= 10) {
//       alert("Please comment why the service is Bad!");
//       return;
//     }

//     return resetForm()
//   }

//   const resetForm = () =>{
//     setScore(10);
//     setComment('')
//   }

//   return (
//     <div className="feedback">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h1>Feedback Form</h1>
//           <div className="Field">
//           <label>Score: {score} </label> <br/>
//           <input type='Range'
//            name="Score" 
//            min="0" 
//            max="10"
//            value={score}
//            onChange={handleScore}/>
//            </div>
//            <div className="Field">
//           <label>Comment: </label> <br/>
//           <textarea placeholder={}
//           value={comment}
//           onChange={(e) => {setComment(e.target.comment)}}  />
//           </div>
//           <button type='submit' className='field_btn' >Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   )
// }*/

// const RadioBtn =({children, selected, setSelected}) => {


//   return(
//     <div>
//       {React.children.map(children, (child, index) => {
//         return cloneElement(child, {
//           checked: child.props.value = selected, setSelected
//         })
//       })} 
//     </div>
//   )
// }

// const RadioOption = ({value, checked, setSelected, children}) => {
//   return (
//     <div>
//       <input type="radio" id='value'
//       checked={checked} 
//       name={value}
//       value={value}
//       setSelected={e =>{setSelected(e.target.value)}} /> 
//       <label htmlFor='value'>{children}</label>
//     </div>
//   )
// }

// function App() {
//   const [selected, setSelected] = useState("");

//   return(
//     <div className="radio">
//       <h2>How did you here about Liitle Lemon</h2>
//       <RadioBtn selected={selected} setSelected={setSelected}>
//         <RadioOption value= "Social_Media">Social Media</RadioOption>
//         <RadioOption value= "Advertisement">Advertisement</RadioOption>
//         <RadioOption value= "friends">friends</RadioOption>
//         <RadioOption value= "other">other</RadioOption>
//       </RadioBtn>
//       <button disabled={!selected}> Submit </button>
//     </div>
//   )
// }

// export default App;

import "./App.css";
//import { ThemeProvider, useTheme } from "./Global Context/ThemeContext";
//import Switch from "./Global Context/switch";
//import { ThemeProvider } from './Global Context/ThemeContext';
import { children } from 'react';
//mport Switch from './Global Context/switch/index';


const ThemeContext = React.createContext("")

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = React.useState("Light")

  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark': 'Light')
  }

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
const useTheme = React.useContext(ThemeContext);

const Tittle = ({ children }) =>{
  cont [theme] = {useTheme}

  return (
    <h2
    style={{
      color: theme === 'Light' ? 'white':'black'
    }}>
      {children}
    </h2>
  )
}

const Paragraph =({ chhildren }) =>{
  const [theme] = {useTheme};

  return(
    <p 
    style={{
      color: theme === 'Light' ? 'white' :'black'    
    }}>
      {chhildren}
    </p>
  )
}

const Header = () =>{

  return(
    <header>
    <Tittle>Little Lemon 🍕</Tittle>
    <Switch/>
    </header>
  )
}

const Contents = () => {

  return(
    <div>
      <Paragraph>
      We are a pizza loving family. And for years, I searched and searched and
      searched for the perfect pizza dough recipe. I tried dozens, or more.
      And while some were good, none of them were that recipe that would
      make me stop trying all of the others.
    </Paragraph>
    </div>
  )
}

function App () {
    const [theme] = {useTheme};

    return (
      <div style={{
        background: theme === 'Light' ? 'white' : 'black'
      }}>
        <Header/>
        <Contents />
      </div>
    )
}

const Root = () =>{
  return 
  <ThemeContext>
    <App/>
  </ThemeContext>
}

const Switch = () => {
  const [theme, toggletheme] = {useTheme}

  return (
    <label >
      <input type ="checkbox"
      onChange={() => toggletheme}
      checked={theme === 'Light'}
      />
    </label>
  )
}

// const Title = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <h2
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </h2>
//   );
// };

// const Paragraph = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <p
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// const Content = () => {
//   return (
//     <div>
//       <Paragraph>
//         We are a pizza loving family. And for years, I searched and searched and
//         searched for the perfect pizza dough recipe. I tried dozens, or more.
//         And while some were good, none of them were that recipe that would
//         make me stop trying all of the others.
//       </Paragraph>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <Title>Little Lemon 🍕</Title>
//       <Switch />
//     </header>
//   );
// };

// const Page = () => {
//   return (
//     <div className="Page">
//       <Title>When it comes to dough</Title>
//       <Content />
//     </div>
//   );
// };

// function App() {
//   const { theme } = useTheme();
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: theme === "light" ? "white" : "black",
//       }}
//     >
//       <Header />
//       <Page />
//     </div>
//   );
// }

// function Root() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }

export default Root;
