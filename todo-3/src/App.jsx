import Name from "./components/todoname.jsx";
import Heading from "./components/todoheading.jsx";
import Items from "./components/items.jsx";
import { useState } from "react";
import WelcomeMessage from "./components/welcomeMessage.jsx";
import "./App.css"
function App() {
  
   let [list,setlist]=useState([])
  

  function onNewItemAdd(name,dueDate){
    setlist([...list,{Name:name,Date:dueDate}])
  }


  function handleOnDelete(itemName){
    let newList=list.filter(item=>item.Name!==itemName)
    setlist(newList);
  }
  return (
    <div>
      <div className="container text-center">
        <Name />
        
        <div className="items-container">
          <Heading onNewItemAdd={onNewItemAdd}/>
          {list.length===0 && <WelcomeMessage/>}
          <Items list={list}  handleOnDelete={handleOnDelete}></Items>
        </div>
      </div>
    </div>
  );
}

export default App;
