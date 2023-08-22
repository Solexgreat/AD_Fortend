import "./App.css";
import FeedbackForm from "./FeedbackForm";
import axios from 'axios'
import Switch from './../Global Context/switch/index';


// function App() {
//   const handleSubmit = () => {
//     console.log("Form submitted!");
//   };

//   return (
//     <div className="App">
//       <FeedbackForm onSubmit={handleSubmit} />
//     </div>
//   );
// }

const initialeState = {
  error: null,
  greeting: null,
}

const greetingsReducer = (state, action) => {
  switch(action.type) {
    case 'Success': {
      return {
        error: null,
        greeting: action.greeting
      }
    }
    case 'Fail': {
      return {
        error: action.error,
        greeting: null,
      }
    }
    default:
      return state
  }
};

function fetch ({url}) {
  const [{error, greeting}, dispatch] = React.useReducer({
    greetingsReducer,
    initialeState
  })
  const [buttonCliked, setButtonClicked] = React.useState(false);

  const fetchingUrl = (url) =>{
    axios.get(url)
    .then(response => {
      const {data} = response;
      const {greeting} = data;
      dispatch({type:'Success', greeting})
      setButtonClicked(true)
    }).catch(error=> {
      dispatch({type:'Fail', error})
    })
  }

  const btnText = buttonCliked ? 'OK' : 'Load Greeting';

  return(
    <div>
      <button onClick={() => fetchingUrl(url)} disabled={buttonCliked}>
        {btnText}
      </button>
      {greeting && <h>{greeting}</h>}
      {error && <p role="alert">Ops failed to fetch!</p>}
    </div>
  )
}

export default App;
