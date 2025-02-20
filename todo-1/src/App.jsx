import Name from "./components/todoname.jsx"
import Heading from "./components/todoheading.jsx"
import Item1 from "./components/item1.jsx"
import Item2 from "./components/item2.jsx"
import "./App.css"
function App() {
  return (
    <div>
      <div class="container text-center">
      <Name/>
      <div class="items-container">
      <Heading/>
      <Item1/>
      <Item2/>
      </div>
      </div>
    </div>
  );
}

export default App;
