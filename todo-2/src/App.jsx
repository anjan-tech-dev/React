import Name from "./components/todoname.jsx";
import Heading from "./components/todoheading.jsx";
import Items from "./components/items.jsx";

import "./App.css"
function App() {
  let list = [
    {
      Name: "Homework-1",
      Date: "18/02/2025",
    },
    {
      Name: "Homework-2",
      Date: "19/02/2025",
    },
  ];
  return (
    <div>
      <div class="container text-center">
        <Name />
        <div class="items-container">
          <Heading />
          <Items list={list}></Items>
        </div>
      </div>
    </div>
  );
}

export default App;
