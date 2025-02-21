
import styles from  './App.module.css'
import Display from "./components/input.jsx"
import ButtonsContainer from "./components/buttons.jsx"
function App() {


  return <center><div className={styles.calculator}>
   <Display></Display>
   <ButtonsContainer></ButtonsContainer>
   
  </div>
  </center>
}

export default App
