import Fruits from "./fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits= {fruits} />
      <FruitsCounter fruits= {fruits} />
    </div>
  );
}

export default App;