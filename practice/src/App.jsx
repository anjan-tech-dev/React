import Items from"./components/items.jsx"
import Error from"./components/error.jsx"
import "./App.css"

function App() {
   let items=['dal','kulche','roti','fruits'];
  //  let items=[];
 
  
  return (
    <>
      <h1>HEALTHY FOOD LIST</h1>
      <Error fooditems={items}></Error>
      <Items fooditems={items}></Items>
    </>
  )
}

export default App
